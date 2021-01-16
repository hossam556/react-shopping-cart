import * as actionTypes from './actionTypes';

export const addToCart = (product)=> {
    return {
        type : actionTypes.ADD_TO_CART ,
        product : product 
    }
};

export const removeFromCart = (product)=> {
    return {
        type :actionTypes.REMOVE_FROM_CART,
        product : product 
    }
};

export const inputHandler =(e)=> {
    return{
        type : actionTypes.INPUT_HANDLER ,
        e : e ,
    }
};

export const createOrder =(e)=> {
    e.preventDefault();
    return{
        type : actionTypes.CREATE_ORDER
    }
};
