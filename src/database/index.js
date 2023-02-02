import  Sequelize from "sequelize";

import config from '../config/database';

import User from "../models/user";
import Caracterizacao from "../models/caracterizacao";
import Classificacao from "../models/classificacao";
import Patrocinador from "../models/patrocinador";
import Subclassificacao from "../models/subclassificacao";

const models = [User, Caracterizacao, Classificacao, Patrocinador, Subclassificacao];

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