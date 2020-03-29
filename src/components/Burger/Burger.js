
import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = props => {
     
    let transformedingredients = props.ingredients;

    console.log(transformedingredients)
     
    transformedingredients = Object.keys(transformedingredients)
                            .map( igname =>  [...Array(props.ingredients[igname])]
                            .map(  (_,index) =>  {return <BurgerIngredients key={index+igname} type={igname} />})
                             ).reduce( (arr,el) => { return arr.concat(el)}, [])

    console.log(transformedingredients)

    if (transformedingredients.length === 0){
        transformedingredients = <p>Please start adding ingredients here</p>
    }

    return (

        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />         
            {transformedingredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )

}


export default burger;