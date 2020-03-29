import React,{Component,Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICE = {
     salad : 0.5,
     bacon : 1.4,
     cheese : 0.4,
     meat : 1.5
}

class BurgerBuilder extends Component {
    
    
        state = {
            ingredients : {
                 salad : 0,
                 bacon :0,
                 cheese : 0,
                 meat :0
            },
            totalPrice : 3
        }
   


    addingredhandler = (type) => {  
        const ingredCountOld = this.state.ingredients[type]
        const ingredCountNew = ingredCountOld + 1
        const upatedIngreds = {...this.state.ingredients}
        upatedIngreds[type] = ingredCountNew

        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + INGREDIENTS_PRICE[type]
        this.setState({
            ingredients:upatedIngreds,
            totalPrice: newPrice
        })
              
    }

    removeingredhandler = (type)=> {
        const ingredCountOld = this.state.ingredients[type]
        if (ingredCountOld > 0){
            const ingredCountNew = ingredCountOld - 1
            const upatedIngreds = {...this.state.ingredients}
            upatedIngreds[type] = ingredCountNew


            const oldPrice = this.state.totalPrice
            const newPrice = oldPrice - INGREDIENTS_PRICE[type]
            this.setState({
                ingredients:upatedIngreds,
                totalPrice: newPrice
            })
        }
     
        
  
    }


         render(){
             return(
                 <Fragment>
                   <Burger ingredients={this.state.ingredients}/>
                   <BuildControls addi ={this.addingredhandler}
                                   di  ={this.removeingredhandler}/>
                  </Fragment>
             );
         }
}


export default BurgerBuilder;