import  Sequelize from "sequelize";

import config from '../config/database';

//import Model from '../modeLs/xxx'

const models = [];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((models) => model.init(this.connection));
  }

  associate() {
    models.forEach((mode) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    })

  }
}

export default new Database();