import Sequelize, {Model} from "sequelize";

  class PatrocinadorImagem extends Model {
  static init(sequelize) {
   super.init(
    
  {
    name: Sequelize.STRING,
    folder: Sequelize.STRING,
    type: Sequelize.STRING,
    filename: Sequelize.STRING,
    size: Sequelize.INTEGER,
    path:Sequelize.STRING,
    id_patrocionador: {
    type:  Sequelize.INTEGER,
      references: { model : "patrocionador", key: "id"},
      allowNull: false,
     },
  },
  {
    sequelize,
    modelName: 'patrocinador_imagem',
    freezeTableName: true
  },    
   );
    
 }

 static associate(models) {
  // this.belongsTo(models.caracterizacao,  {
  //   foreignKey: " id_caracterizacao",
  // });   
 
  }

}

export default PatrocinadorImagem;