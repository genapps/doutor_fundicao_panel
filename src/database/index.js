import  Sequelize from "sequelize";

import config from '../config/database';

import Usuario from "../models/usuario";
import Caracterizacao from "../models/caracterizacao";
import Classificacao from "../models/classificacao";
import Patrocinador from "../models/patrocinador";
import Subclassificacao from "../models/subclassificacao";
import CaracterizacaoImagem from "../models/caracterizacaoImagem";
import PatrocinadorImagem from "../models/patrocinadorImagem"

const models = [Usuario, Caracterizacao, Classificacao, Patrocinador, Subclassificacao, CaracterizacaoImagem, PatrocinadorImagem];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((model) => model.init(this.connection));
  }

  associate() {
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    })

  }
}

export default new Database();