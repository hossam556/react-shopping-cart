import React from 'react';
import classes from './cartItem.module.css';
import formatCurrency from '../../util';

const cartItem = (props)=> (
  <div className={classes.CartItem}>
    <div>
      <img src={props.img} alt={props.title}/>
      <p>{props.title}</p>
    </div>
      <div className={classes.Ct}>
          <p>{formatCurrency(props.price)} x {props.count}</p>
          <button onClick={props.remove}>Remove</button>
      </div>
  </div>
)

export default cartItem ;