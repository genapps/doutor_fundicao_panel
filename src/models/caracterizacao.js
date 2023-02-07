import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Caracterizacao extends Model {
  static init (sequelize) {
    super.init(
          {
          codigo: Sequelize.STRING,
          name: Sequelize.STRING,
          tipo: Sequelize.STRING,
          id_subclassificacao: {
            type:  Sequelize.INTEGER,
            references: { model : "subclassificacao", key: "id"}, 
            allowNull: false,
          },

          }, 
          {
            sequelize,
            modelName: 'caracterizacao',
            freezeTableName: true
          },             
    );
  }

  static associations(models) {
    this.belongsTo(models.subclassificacao,  {
      foreignKey: "id_subclassificacao",
    });
    // this.hasMany(models.imagem);    
  }
}

export default Caracterizacao;
  