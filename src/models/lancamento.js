import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Lancamento extends Model {
  static init (sequelize) {
    super.init(
          {
         
          inicio: Sequelize.DATE,
          fim: Sequelize.DATE, 
          qtd_hora: Sequelize.INTEGER,   
          descricao: Sequelize.TEXT            
          }, 
          {
            sequelize, name: {
             singular: 'lancamento',
             plural: 'lancamentos'
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

export default Lancamento;
  