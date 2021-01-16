import React from 'react';
import classes from './checkout.module.css';
import Fade from 'react-reveal/Fade';


const checkout = (props)=> (
 <Fade right>   
 <div >
    <form onSubmit={props.createOrder} >
    <ul className={classes.Checkout}>
        <li>
            <label>Email</label>
            <input name='Email' type='email' onChange={props.inputHandler} />
        </li>
        <li>
            <label>Name</label>
            <input name='Name' type='text' onChange={props.inputHandler} />
        </li>
        <li>
            <label>Address</label>
            <input name='Address' type='text' onChange={props.inputHandler} />
        </li>
        <li><button onClick={props.openModal} type='submit'>Checkout</button></li>
    </ul>
    </form>
 </div>
 </Fade>
)

export default checkout ;