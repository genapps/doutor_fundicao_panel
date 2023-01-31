import AdminJS from "adminjs";

import Lancamento from "../models/lancamento";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Lancamento,
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
            icon: "Lancamento",
        },
        properties: {
            id: {
                position: 1,
            },
            
            inicio: {
                position: 3,
                isRequired: true,
            },
            fim: {
                position: 4,
                isRequired: true,
            },
            qtd_hora: {
                position: 5,
                isRequired: true,
            },
            descricao: {
                position: 5,
                isRequired: true,
            },

            
            createAt:{
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
            updateAt:{
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
           
           
            initials: {
                isVisible: false
            },            
        }
    }
}
