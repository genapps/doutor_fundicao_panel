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
            id_subclassificacao: {
                position: 2,
            },  
            name: {
                position: 3,
                isRequired: true,
            },            
            codigo: {
                position: 4,
                isRequired: true,
            },
            tipo: {
                position: 5,
                isRequired: true,
            },
            descricao: {
                position: 6,
                isVisible: { list: false, filter: false, show: true, edit: true },
                type: "richtext",
                //    quill: {
                //         module: {
                //            props: {
                //   toolbar:[
                //                 ["bold", "italic"],
                //                 ["limk", "image"],
                //             ],
                //         },
                //     },
                // },
            },                     
        }
    }
}
