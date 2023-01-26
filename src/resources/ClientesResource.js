import AdminJS from "adminjs";
import Curso from "../models/curso";

import Project from "../models/curso";

import { hasManagerPermission } from "../services/auth";
import Ativos from "../models/ativos";
import Clientes from "../models/clientes";

export default {
    resource: Clientes,
    options: {
        parent:{
            icon: "Roadmap",
        },
        // actions: {
        //     new: {
        //         isAccessible: ({ currentAdmin }) => hasManagerPermission(currentAdmin),
        //     },
        //     edit: {
        //         isAccessible: ({ currentAdmin }) => hasManagerPermission(currentAdmin),
        //     },
        //     delete: {
        //         isAccessible: ({ currentAdmin }) => hasManagerPermission(currentAdmin),           
        //      },
        // },
        properties: {
            id: {
              position: 1,
            },
            nome:{
                position:2,
                isRequired: true,
    
            },
            cnpj: {
                position: 3,
                type: "textarea",
            },
            endereco: {
                position: 4,
            },
            email: {
                position: 5,
            },
            senha: {
                position: 6,
            },
            createdAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 8,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};