import resources from "./resources";
import labels from "./labels";

const translations = {
    actions: {
        new: "Criar Novo",
        edit: "Editar",
        show: "Exibir",
        delete: "Apagar",
        bulkDelete: "Apagar Todos",
        list: "Listagem"
    },
    buttons: {

    },
    labels: {
        navigator: "Navegação",
        ...labels
    },
    properties: {

    },
    resources,
    messages: {

    },
};

export default {
    locale: {
        language: 'pt-BR',
        translations
    },
};