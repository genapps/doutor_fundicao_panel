import Sequelize, {Model} from "sequelize";

class Evento extends Model {
  static init (sequelize) {
    super.init(
          {
            nome: Sequelize.TEXT, 
            data: Sequelize.DATE,
            endereco: Sequelize.TEXT,

            },
          {
            sequelize,
             name: {
             singular: "evento",
             plural: "eventos",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Evento;

