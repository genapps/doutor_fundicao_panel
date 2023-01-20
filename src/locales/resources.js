const commonProps = {
    status: 'Situação',
    createdAt: 'Criação',
    updatedAt: 'Atualização',

};

export default {
    users: {
        actions: {
            resetPassword: 'Redefinir senha',
        },
        properties: {
            id: 'ID',
            initials: 'Iniciais',
            name: 'Nome',
            description: "Descrição",
            password: 'Senha',
            passwordHash: 'Senha criptografada',
            userId: "Responsável",
            role: 'Perfil',
            ...commonProps,
        },
        projects: {
            properties: {
                id: "ID",
                name: "Nome",
                description: "Descrição",
                userId: "Responsável",
                ...commonProps,


            },
        },
    },

    
};