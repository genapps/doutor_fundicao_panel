import AdminJS from "adminjs";

import { hasManagerPermission } from "../services/auth";
import Cartaocredito from "../models/cartaocredito";

export default {
    resource: Cartaocredito,
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
            datainicial:{
                position:2,
              
    
            },
            datavencimento: {
                position:3,
            isRequired: true,
    
            },
            agencia: {
                position:4,
            
    
            },
            numeroconta: {
                position:5,

            
            },
        
            createdAt: {
                position: 6,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};