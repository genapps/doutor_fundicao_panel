import Sequelize, {Model} from "sequelize";

class Curso extends Model {
  static init (sequelize) {
    super.init(
          {
            nome: Sequelize.STRING, 
            data: Sequelize.DATE,
            observacao:  Sequelize.TEXT,
            descricao: Sequelize.TEXT,
            },
          {
            sequelize,
             name: {
             singular: "curso",
             plural: "cursos",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Curso;

