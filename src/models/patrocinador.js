import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Patrocinador extends Model {
  static init (sequelize) {
    super.init(
          {
          descricao: Sequelize.STRING,
          descricao: Sequelize.STRING,
          imagem: Sequelize.STRING,
          
          }, 
          {
            sequelize,
            modelName: 'patrocinador',
            freezeTableName: true
          },            
    );
  }

  static associations(models) {
      
  }
}

export default Patrocinador;
  