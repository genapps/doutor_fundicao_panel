import Sequelize, {Model} from "sequelize";

class Nota extends Model {
  static init (sequelize) {
    super.init(
          {
            
            cnpj: Sequelize.TEXT,
            endereco: Sequelize.TEXT,
            data: Sequelize.DATE,
            empresa: Sequelize.TEXT,
            cidade: Sequelize.TEXT,
            bairro: Sequelize.TEXT,
            quantidade: Sequelize.TEXT,
            total: Sequelize.TEXT,
            valortotal: Sequelize.TEXT,
            descricao: Sequelize.TEXT,
            },
          {
            sequelize,
             name: {
             singular: "nota",
             plural: "notas",
            },
          }
    );
  }
  static associations(models) {
    //this.hasMany(models.Itens);
  }
}
export default Nota;

