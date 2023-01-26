import Sequelize, {Model} from "sequelize";

class Eventos extends Model {
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
export default Eventos;

