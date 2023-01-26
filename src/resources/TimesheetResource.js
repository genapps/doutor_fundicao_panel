import AdminJS from "adminjs";

import Timesheet from "../models/timesheet";

import { hasManagerPermission } from "../services/auth";

export default {
    resource: Timesheet,
    options: {
        parent:{
            icon: "Roadmap",
        },
        actions: {
            new: {
                isAccessible: ({ currentAdmin }) => hasManagerPermission(currentAdmin),
            },
            edit: {
                isAccessible: ({ currentAdmin }) => hasManagerPermission(currentAdmin),
            },
            delete: {
                isAccessible: ({ currentAdmin }) => hasManagerPermission(currentAdmin),           
             },
        },
        properties: {
            id: {
                position: 1,
              },
            inicio: {
              position: 2,
            },
            fim:{
                position: 3,
                isRequired: true,
    
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