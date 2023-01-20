import Sequelize,{Model} from 'sequelize';

  class Task extends Model {
  static init(Sequelize) {
   super.init(
    
  {
    due_date: DataTypes.DATE,
    effort: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    status: DataTypes.ENUM(
      "backlog",
         "doing",
         "done",
         "approved",
         "rejected" 
    ),
    user_id: Sequelize.INTEGER,
    project_id: Sequelize.INTEGER,
    path: Sequelize.STRING,
    folder: Sequelize.STRING,
    type: Sequelize.STRING,
    filename: Sequelize.INTEGER,
    size: Sequelize.INTEGER,
  },
  {
    sequelize,
    name: {
      singular: "task",
      plural: "tasks",
    },
  }
   );
    
 }

 static associate(models) {
  this.belongsTo(models.User, {
    foreignKey: "user_id",
  });

  this.belongsTo(models.User, {
    foreignKey: "project_id",
  });

  }

}

export default Task;