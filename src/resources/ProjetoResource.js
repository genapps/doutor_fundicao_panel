import AdminJS from "adminjs";

import Projeto from "../models/projeto";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Projeto,
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
            icon: "Projeto",
        },
        properties: {
            id: {
                position: 1,
            },
            nome: {
                position: 2,
                isRequired: true,
            },
            inicio: {
                position: 3,
                isRequired: true,
            },
            fim: {
                position: 4,
                isRequired: true,
            },

            
            createAt:{
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
            updateAt:{
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
           
           
            initials: {
                isVisible: false
            },            
        }
    }
}
