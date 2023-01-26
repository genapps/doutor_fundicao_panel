import Sequelize, {Model} from "sequelize";

class Ativos extends Model {
  static init (sequelize) {
    super.init(
          {
            nome: Sequelize.TEXT, 
            data: Sequelize.DATE,
            observacao:  Sequelize.TEXT,
            codigo: Sequelize.TEXT,
            local: Sequelize.TEXT,
            },
          {
            sequelize,
             name: {
             singular: "ativo",
             plural: "ativos",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Ativos;

