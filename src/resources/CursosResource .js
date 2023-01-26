import AdminJS from "adminjs";
import Curso from "../models/curso";

import Project from "../models/curso";

import { hasManagerPermission } from "../services/auth";

export default {
    resource: Curso,
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
            name:{
                position:2,
                isRequired: true,
    
            },
            observacao: {
                position: 3,
                type: "textarea",
            },
            descricao: {
                position: 4,
            },
            createdAt: {
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};