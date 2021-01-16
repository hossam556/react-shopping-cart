import React from 'react';
import classes from './Cmodal.module.css';

const modal =(props)=> {
       let titles = props.cItems.map(item=><div className={classes.Title}>{item.count} x {item.title}</div>);

    return(
    <div className={classes.Modal}>
        <button onClick={props.closeModal}>x</button>
        <p>Your order has been placed</p>
        <li><div>Name :</div><div>{props.name}</div> </li>
        <li><div>Email :</div><div>{props.email}</div> </li>
        <li><div>Address :</div><div>{props.address}</div> </li>
        <li><div>Total :</div><div>{props.total}</div> </li>
        <li><div>CartItems :</div><div>{titles}</div> </li>
    </div>
    )
     };

export default modal ;