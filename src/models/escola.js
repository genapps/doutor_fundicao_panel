import Sequelize, {Model} from "sequelize";

class Escola extends Model {
  static init (sequelize) {
    super.init(
          {
            professor: Sequelize.TEXT, 
            aluno: Sequelize.TEXT,
            

            },
          {
            sequelize,
             name: {
             singular: "escola",
             plural: "escolas",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Escola;

