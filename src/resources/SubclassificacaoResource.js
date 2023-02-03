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
            id_classificacao: {
                position: 2,
            },            
            name: {
                position: 3,
                isRequired: true,
            }          
        }
    }
}
