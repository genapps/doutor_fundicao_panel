import Sequelize, {Model} from "sequelize";

  class Imagems extends Model {
  static init(sequelize) {
   super.init(
    
  {
    
    folder: Sequelize.STRING,
    type: Sequelize.STRING,
    filename: Sequelize.STRING,
    size: Sequelize.INTEGER,
    id_caracterizacao: {
    type:  Sequelize.INTEGER,
      references: { model : "caracterizacaos", key: "id"},
      allowNull: false,
     },
  },
  {
    sequelize,
    name: {
      singular: "imagem",
      plural: "imagems",
    },
  }
   );
    
 }

 static associate(models) {
  // this.belongsTo(models.caracterizacao,  {
  //   foreignKey: " id_caracterizacao",
  // });   
 
  }

}

export default Imagems;