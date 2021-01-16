import React from 'react'
import classes from './Filter.module.css';

const filter = (props)=> (
    <div className={classes.Filter}>
        <div>{props.count} Products</div>
        <div>
            Order{' '}
            <select value={props.sort} onChange={props.productSort}>
                <option value=''>Latest</option>
                <option value='Lowest'>Lowest</option>
                <option  value='Highest'>Highest</option>
            </select>
        </div>
        <div>
            Filter{' '}
            <select value={props.size} onChange={props.productFilter}>
                <option value=''>All</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
                <option value='XXL'>XXL</option>           
            </select>
        </div>
    </div>
);

export default filter ;