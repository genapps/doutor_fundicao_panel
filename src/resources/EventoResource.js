import AdminJS from "adminjs";
import { hasManagerPermission } from "../services/auth";

import Evento from "../models/evento";

export default {
    resource: Evento,
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
            data: {
                position: 3,
                type: "textarea",
            },
            endereco: {
                position: 4,
            },
            nome: {
                position: 5,
            },
           
            createdAt: {
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};