import AdminJS from "adminjs";
import { hasManagerPermission } from "../services/auth";
import Nota from "../models/nota";

export default {
    resource: Nota,
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
            // empresa: {
            //     position: 3,
            //     type: "textarea",
            // },
            // cidade: {
            //     position: 4,
            // },
            // bairro: {
            //     position: 5,
            // },
            // cnpj: {
            //     position: 6,
            // },
            // quantidade: {
            //     position: 7,
            // },
            // total: {
            //     position: 8,
            // },
            // valortotal: {
            //     position: 9,
            // },
            // descricao: {
            //     position: 10,
            // },
            // data: {
            //     position: 11,
            // },
            // endereco: {
            //     position: 12,
            // },

            createdAt: {
                position: 13,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 14,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};