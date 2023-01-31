import AdminJS from "adminjs";

import Tarefa from "../models/tarefa";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Tarefa,
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
            icon: "Tarefa",
        },
        properties: {
            id: {
                position: 1,
            },
            descricao: {
                position: 2,
                isRequired: true,
            },
            qtd_horas: {
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
