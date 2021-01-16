import React from 'react';
import formatCurrency from '../../util';
import classes from './Pmodal.module.css';


const modal = (props)=> {
     
    const sizes = props.availableSizes.map(x=> 
    <span>{' '} <button 
    className={classes.sizes}
    onClick={props.addToCart}>{x}</button></span>)

    return(
    <div className={classes.Modal}>
        <img src={props.img} alt={props.title}/>
        <button onClick={props.closeModal} className={classes.button}>x</button>
         <div className={classes.title}>
           <p><strong>{props.title}</strong></p>
           <p>{props.description}</p>
           <p>Available Sizes : {sizes} </p>
           <span className={classes.block}>
              <p>{formatCurrency(props.price)}</p>
              <button className={classes.add} onClick={props.addToCart} >Add To Cart</button>
            </span>
         </div>
    </div>
    )
}

export default modal