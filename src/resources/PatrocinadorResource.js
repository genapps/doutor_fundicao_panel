import AdminJS from "adminjs";

import Patrocinador from "../models/patrocinador";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Patrocinador,
    options: {
        parent: {
            icon: "Patrocinador",
        },
        properties: {
            id: {
                position: 1,
            },
            imagem: {
                position: 2,
                isRequired: true,
            },
            descricao: {
                position: 2,
                isRequired: true,
            },
            createAt:{
                position: 3,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
            updateAt:{
                position: 4,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
           
           
            initials: {
                isVisible: false
            },            
        }
    }
}
