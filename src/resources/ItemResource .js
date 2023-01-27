import AdminJS from "adminjs";
import { hasManagerPermission } from "../services/auth";
import Item from "../models/item";

export default {
    resource: Item,
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
            quantidade:{
                position:2,
                isRequired: true,
    
            },

            nota_id: {
                position:3,                
                isVisible: true,
            },            
           
            createdAt: {
                position: 4,
                isVisible: { list: true, filter: true, show: true, edit: false},

            },
            updatedAt: {
                position: 5,
                isVisible: { list: true, filter: true, show: true, edit: false},
            },             
        }, 
    },
   
};