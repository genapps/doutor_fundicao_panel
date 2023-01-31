import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Projeto extends Model {
  static init (sequelize) {
    super.init(
          {
         
          nome: Sequelize.STRING,
          inicio: Sequelize.DATE,
          fim: Sequelize.DATE,
        
          }, 
          {
            sequelize, name: {
             singular: 'projeto',
             plural: 'projetos'
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

export default Projeto;
  