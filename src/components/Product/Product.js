import React from 'react';
import classes from './Product.module.css';
import formatCurrency from '../../util';

const product = (props)=> (
    <div className={classes.Item}> 
        <a href={'#' + props.id} onClick={props.openModal}>
            <img src={props.img} alt={props.title}/>
            <p>{props.title}</p>
        </a>
        <div>
            <p>{formatCurrency(props.price)}</p>
            <button onClick={props.addToCart}
            >Add To Cart</button>
        </div>
        
    </div>
)

export default product ;