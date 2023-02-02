import AdminJS from "adminjs";

import Classificacao from "../models/classificacao";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Classificacao,
    options: {
        actions: {
            // list: {
            //     isAccessible: ({ currentAdmin}) => hasAdminPermission(currentAdmin)
            //  },
            // resetPassword: {
            //     actionType: 'record',
            //     icon: "Password",
            //     handler: async(request, response, context) => {
            //         return {
            //             record: context.record.toJSON(),
            //         };
            //     },
            // },
        },
        parent: {
            icon: "Classificacao",
        },
        properties: {
            id: {
                position: 1,
            },
            codigo: {
                position: 2,
                isRequired: true,
            },
            nome: {
                position: 3,
                isRequired: true,
            },
           
            createAt:{
                position: 9,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
            updateAt:{
                position: 10,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
           
           
            initials: {
                isVisible: false
            },            
        }
    }
}
