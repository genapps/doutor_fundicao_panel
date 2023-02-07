import AdminJS from "adminjs";

import Classificacao from "../models/classificacao";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Classificacao,
    options: {
        parent: {
            icon: "Classificacao",
        },
        properties: {
            id: {
                position: 1,
            },
            codigo: {
                position: 2,
                isRequired: true,
            },
            name: {
                position: 3,
                isRequired: true,
            },
                        
            id_classificacao:{
                isVisible : false,
            }
        }
    }
}