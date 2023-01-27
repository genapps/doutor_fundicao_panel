import Sequelize, {Model} from "sequelize";

class Cliente extends Model {
  static init (sequelize) {
    super.init(
          {
            nome: Sequelize.TEXT, 
            cnpj: Sequelize.TEXT,
            endereco:  Sequelize.TEXT,
            email: Sequelize.TEXT,
            senha: Sequelize.TEXT,
            },
          {
            sequelize,
             name: {
             singular: "cliente",
             plural: "clientes",
            },
          }
    );
  }
  static associations(models) {
   
  }
}
export default Cliente;

