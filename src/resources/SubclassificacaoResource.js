import AdminJS from "adminjs";

import Subclassificacao from "../models/subclassificacao";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Subclassificacao,
    options: {
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
