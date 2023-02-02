import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Classificacao extends Model {
  static init (sequelize) {
    super.init(
          {
          codigo: Sequelize.STRING,
          nome: Sequelize.STRING,
                  
          }, 
          {
            sequelize, name: {
             singular: 'classificacao',
             plural: 'classificacaos',
            },
          },
          {
            freezeTableName: true
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

export default Classificacao;
  