import Sequelize, {Model} from "sequelize";

  class Timesheet extends Model {
  static init(sequelize) {
   super.init(
    
  {
    inicio: Sequelize.DATE,
    fim: Sequelize.DATE,
        
  
  },
  {
    sequelize,
    name: {
      singular: "timesheet",
      plural: "timesheets",
    },
  }
   );
    
 }

 static associate(models) {
  

  }

}

export default Timesheet;