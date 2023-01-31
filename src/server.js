import "dotenv/config";

import "./database";

import AdminJS from 'adminjs';
import AdminJExpress from '@adminjs/express';
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UserResource from "./resources/UserResource";
 import ProjetoResource from "./resources/ProjetoResource";
import User from "./models/user";

import { password } from "./config/database";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UserResource,ProjetoResource],
    branding: {
        companyName: 'Task Manager',
        logo: false,
        softwareBrothers: false
    },
});

 //const router = AdminJExpress.buildRouter(adminJS);
const router = AdminJExpress.buildAuthenticatedRouter(adminJS, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email } } );

        if (user && (await user.checkPassword(password))) {
            return user;
        }

        return false;
    },
    cookiePassword: process.env.SECRET,
});
app.use(adminJS.options.rootPath,router);
app.listen(5000, () => {
    console.log("AdminJS is unp:der htt//localhost:5000/admin");
});