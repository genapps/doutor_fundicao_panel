import AdminJS from "adminjs";

import Escola from "../models/escola";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Escola,
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
            icon: "Escola",
        },
        properties: {
            id: {
                position: 1,
            },
            escola:{
                position:2,
                isRequired: true,
    
            },
            professor: {
                position: 3,
                type: "textarea",
            },
            
         
           
 
            createAt:{
                position: 4,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
            updateAt:{
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false}
            },
           
            password_hash: {
                isVisible: false
            }
        }
    }
}
