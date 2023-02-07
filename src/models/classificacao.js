import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Classificacao extends Model {
  static init (sequelize) {
    super.init(
          {
          codigo: Sequelize.STRING,
          name: Sequelize.STRING,                  
          }, 
          {
            sequelize,
            modelName: 'classificacao',
            freezeTableName: true
          },        
    );
  }

  static associations(models) {
      
  }
}

export default Classificacao;
  