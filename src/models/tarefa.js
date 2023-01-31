import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Tarefa extends Model {
  static init (sequelize) {
    super.init(
          {
         
          descricao: Sequelize.TEXT,
          qtd_horas: Sequelize.DOUBLE,
        
          }, 
          {
            sequelize, name: {
             singular: 'tarefa',
             plural: 'tarefas'
            },
          }
    );

    this.addHook('beforeSave' , async (user) =>  {
       if(user.password) {
          user.password_hash = await createPasswordHash(user.password);
       }
       console.log(user.password);
    }
    
    )
  }

  static associations(models) {
      
  }

  checkPassword(password) {
    console.log('Password ', password);                
    return checkPassword1(this, password);
  }
}

export default Tarefa;
  