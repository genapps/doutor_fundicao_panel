import AdminJS from "adminjs";

import Usuario from "../models/usuario";

import { hasAdminPermission } from "../services/auth";

export default {
    resource: Usuario,
    options: {
        parent: {
            icon: "User",
        },
        properties: {
            id: {
                position: 1,
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4,
                isRequired: true,
            },
            password: {
                position: 5,
                isVisible: { list: false, filter:false, show: false, edit: true},
            },
            role: {
                position: 6,
                isRequired: true,
                availableValues: [
                    {value: 'admin' , label: 'Administrador'},
                    {value: 'manager' , label: 'Gerente'},
                    {value: 'developer' , label: 'Desenvolvedor'}
                ],
            },
            status: {
                position: 7,
                isRequired: true,
                availableValues: [
                    {value: 'active' , label: 'Ativo'},
                    {value: 'archived' , label: 'Arquivado'}
                ],
            },
            initials: {
                isVisible: false
            },

            password_hash: {
                isVisible: false
            },  

        }
    }
}
