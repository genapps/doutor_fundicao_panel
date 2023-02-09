import AdminJS from "adminjs";

import Caracterizacao from "../models/caracterizacao";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Caracterizacao,
    options: {
        parent: {
            icon: "Label",
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
                type: "richtext"
            },                     
        }
    }
}
