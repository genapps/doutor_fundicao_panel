import AdminJS from "adminjs";
import Curso from "../models/curso";

import Project from "../models/curso";

import { hasManagerPermission } from "../services/auth";
import Ativos from "../models/ativos";
import Servico from "../models/servico";

export default {
    resource: Servico,
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
            codigo:{
                position:2,
                isRequired: true,
    
            },
            valor: {
                position: 3,
                type: "textarea",
            },
           
            createdAt: {
                position: 4,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};