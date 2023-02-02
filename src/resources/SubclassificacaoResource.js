import AdminJS from "adminjs";

import Subclassificacao from "../models/subclassificacao";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Subclassificacao,
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
            icon: "User",
        },
        properties: {
            id: {
                position: 1,
            },
            classificacao: {
                position: 2,
                isRequired: true,
            },
            descricao: {
                position: 3,
                isRequired: true,
            },
            createAt:{
                position: 4,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
            updateAt:{
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
           
           
            initials: {
                isVisible: false
            },            
        }
    }
}
