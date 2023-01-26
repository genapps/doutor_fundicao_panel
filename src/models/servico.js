import Sequelize, {Model} from "sequelize";

class Servico extends Model {
  static init (sequelize) {
    super.init(
          {
            codigo: Sequelize.TEXT,
            valor: Sequelize.NUMBER,
            },
          {
            sequelize,
             name: {
             singular: "servico",
             plural: "servicos",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Servico;

