import React,{Component,Fragment} from 'react';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            ingredients : {
                 salad : 1,
                 bacon :1,
                 cheese : 2,
                 meat :1
            }
        }
    }



         render(){
             return(
                 <Fragment>
                   <Burger ingredients={this.state.ingredients}/>
                  <div>burger controls</div>
                  </Fragment>
             );
         }
}


export default BurgerBuilder;