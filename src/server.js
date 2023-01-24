import "dotenv/config";

import "./database";

import AdminJS from 'adminjs';
import AdminJExpress from '@adminjs/express';
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UserResource from "./resources/UserResource";
import ProjectResource from "./resources/ProjectResource ";
import TaskResource from "./resources/TaskResource";

import locale from "./locales";
import theme from "./theme";
AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    dashboard: {
        component: AdminJS.bundle("./components/Dashboard/index"),
    },
    resources: [UserResource, ProjectResource, TaskResource],
    branding: {
        companyName: 'Task Manager',
        logo: false,
        softwareBrothers: false,
        theme,

    },
    ...locale,
});

const router = AdminJExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath,router);
app.listen(5000, () => {
    console.log("AdminJS is unp:der htt//localhost:5000/admin");
});