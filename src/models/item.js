import Sequelize, {Model} from "sequelize";

class Item extends Model {
  static init (sequelize) {
    super.init(
          {
            quantidade: Sequelize.INTEGER,
            id_nota: Sequelize.INTEGER,
            
           
            },
          {
            sequelize,
             name: {
             singular: "item",
             plural: "itens",
            },
          }
    );
  }
  static associations(models) {
    // this.belongsTo(models.Nota, {
    //   foreignKey: "id_nota",
    // });
  }
}
export default Item;

