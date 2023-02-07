import Sequelize, {Model} from "sequelize";


class Subclassificacao extends Model {
  static init (sequelize) {
    super.init(
          {
          name: Sequelize.STRING,          
          id_classificacao: {
            type:  Sequelize.INTEGER,
            references: { model : "classificacaos", key: "id"}, 
            allowNull: false,
            }
          }, 
          {
            sequelize, name: {
             singular: 'subclassificacao',
             plural: 'subclassificacaos',
            },
          },
          {
            freezeTableName: true
          }          
    );
  }

  static associations(models) {
    this.belongsTo(models.classificacao,  {
      foreignKey: "id_classificacao",
    });    
    this.hasMany(models.caracterizacao);
      
  }
}

export default Subclassificacao;
  