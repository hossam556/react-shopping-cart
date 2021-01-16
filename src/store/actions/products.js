import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const productFilter=(event)=>{
    return{
        type :actionTypes.PRODUCT_FILTER ,
        event : event
    }
};

export const productSort = (event)=>{
    return{
        type : actionTypes.PRODUCT_SORT,
        event : event
    }
};

export const openModal = (product)=> {
    return {
        type : actionTypes.OPEN_MODAL ,
        product : product 
    }
};

export const closeModal = ()=> {
    return {
        type : actionTypes.CLOSE_MODAL ,
    }
};

export const fetchProductsSuccess = (products)=> {
    return {
        type : actionTypes.FETCH_PRODUCTS_SUCCESS ,
        products : products
    }
};

export const fetchProductsFail = ()=> {
    return {
        type : actionTypes.FETCH_PRODUCTS_FAIL
    }
};



export const fetchProducts =()=>{
   return dispatch=>{
         
    axios.get('https://react-shopping-cart-98508-default-rtdb.firebaseio.com/products.json').then(response=>{
            dispatch(fetchProductsSuccess(response.data))
    }).catch(error =>{
        dispatch(fetchProductsFail())
    })

    }
}