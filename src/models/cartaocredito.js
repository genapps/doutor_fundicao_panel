import Sequelize, {Model} from "sequelize";

class Cartaocredito extends Model {
  static init (sequelize) {
    super.init(
          {
            datainicial: Sequelize.DATE, 
            datavencimento: Sequelize.DATE,
            agencia:  Sequelize.TEXT,
            numeroconta: Sequelize.NUMBER,
            },
          {
            sequelize,
             name: {
             singular: "cartaocredito",
             plural: "cartaocreditos",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Cartaocredito;

