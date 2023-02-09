import "dotenv/config";

import "./database";

import AdminJS from 'adminjs';
import AdminJExpress from '@adminjs/express';
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UsuarioResource from "./resources/UsuarioResource";
import CaracterizacaoResource from "./resources/CaracterizacaoResource";
import ClassificacaoResource from "./resources/ClassificacaoResource";
import PatrocinadorResource from "./resources/PatrocinadorResource";
import SubclassificacaoResource from "./resources/SubclassificacaoResource";
import CaracterizacaoImagemResource from "./resources/CaracterizacaoImagemResource";
import PatrocinadorImagemResource from "./resources/PatrocionadorImagemResource";

import { password } from "./config/database";

import Usuario from './models/usuario';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UsuarioResource, ClassificacaoResource, SubclassificacaoResource,  CaracterizacaoResource, CaracterizacaoImagemResource, PatrocinadorResource, PatrocinadorImagemResource ],
    branding: {
        companyName: 'Doutor Fundição',
        logo: 'https://static.wixstatic.com/media/f48a2c_90937b0d30584b86b53e365bd004f012~mv2.jpg/v1/fill/w_400,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20Doutor%20Fundi%C3%A7%C3%A3o%201080x508%20(1).jpg',
        softwareBrothers: false
    },
});

const router = AdminJExpress.buildRouter(adminJS);

// const router = AdminJExpress.buildAuthenticatedRouter(adminJS, {
//     authenticate: async (email, password) => {
//         const user = await Usuario.findOne({ where: { email } } );

//         if (user && (await user.checkPassword(password))) {
//             return user;
//         }

//         return false;
//     },
//     cookiePassword: process.env.SECRET,
// });

app.use(adminJS.options.rootPath,router);
app.listen(5000, () => {
    console.log("AdminJS is unp:der htt//localhost:5000/admin");
});