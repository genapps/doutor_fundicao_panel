import Sequelize, {Model} from "sequelize";

class CaracterizacaoImagem extends Model {
  static init(sequelize) {
   super.init(    
      {
        
        folder: Sequelize.STRING,
        type: Sequelize.STRING,
        filename: Sequelize.STRING,
        size: Sequelize.INTEGER,
        path: Sequelize.STRING,
        id_caracterizacao: {
          type:  Sequelize.INTEGER,
            references: { model : "caracterizacao", key: "id"},
            allowNull: false,
          },
      },
      {
        sequelize,
        modelName: 'caracterizacao_imagem',
        freezeTableName: true
      },    
   ); 
 }

static associate(models) {
  this.belongsTo(models.caracterizacao,  {
    foreignKey: "id_caracterizacao",
  });   
}

}

export default CaracterizacaoImagem;