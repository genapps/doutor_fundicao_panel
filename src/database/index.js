import  Sequelize from "sequelize";

import config from '../config/database';

import User from "../models/user";
import Project from "../models/project";
import Task from "../models/task";
import Timesheet from "../models/timesheet";
import Curso from "../models/curso";
import Ativo from "../models/ativo";
import Evento from "../models/evento";
import Servico from "../models/servico";
import Cliente from "../models/cliente";
import Nota from "../models/nota";
import Item from "../models/item";

const models = [User, Project, Task, Timesheet, Curso, Ativo, Evento, Servico, Cliente, Nota, Item];

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