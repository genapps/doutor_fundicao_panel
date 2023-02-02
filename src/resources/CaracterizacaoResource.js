import AdminJS from "adminjs";

import Caracterizacao from "../models/caracterizacao";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Caracterizacao,
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
            codigo: {
                position: 2,
                isRequired: true,
            },
            descricao: {
                position: 3,
                isRequired: true,
            },
            subclassificacao: {
                position: 4,
                isRequired: true,
            },
            tipocodigo: {
                position: 5,
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
