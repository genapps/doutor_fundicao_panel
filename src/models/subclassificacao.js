import Sequelize, {Model} from "sequelize";
import {createPasswordHash, checkPassword1} from '../services/auth'

class Subclassificacao extends Model {
  static init (sequelize) {
    super.init(
          {
          classificacao: Sequelize.STRING,
          descricao: Sequelize.STRING,
              
          }, 
          {
            sequelize, name: {
             singular: 'subclassificacao',
             plural: 'subclassificacaos',
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

export default Subclassificacao;
  