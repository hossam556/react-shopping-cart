import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products :null ,
    size : '' ,
    sort : '',
    product : null ,
    loading : false ,
    error : false 
};

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.PRODUCT_FILTER :
            if(action.event.target.value ===''){
                return{
                    ...state ,
                    products : state.products,
                    size : action.event.target.value
                };
            }else { 
                return{
                  ...state ,
                  size : action.event.target.value ,
                  products : state.products.filter(product => product.availableSizes.indexOf(action.event.target.value) >= 0)
                }
            }
        case actionTypes.PRODUCT_SORT :
            const sort = action.event.target.value ;
                 return{
            sort :sort ,
            products : state.products.slice().sort((a,b)=>
               sort === 'Lowest'
               ? a.price > b.price
                ? 1 
                : -1
               :sort === 'Highest'
               ? a.price < b.price
                ? 1
                : -1
               : a._id < b._id
                ? 1 
                : -1
           )
        }; 
        case actionTypes.OPEN_MODAL :
            return {
                ...state ,
                product : action.product
            };
        case actionTypes.CLOSE_MODAL :
            return {
                ...state ,
                product : null
            };
        case actionTypes.FETCH_PRODUCTS_START :
            return {
                ...state ,
                loading : true
            };
        case actionTypes.FETCH_PRODUCTS_SUCCESS :
            return {
                ...state ,
                products : action.products
            };
        case actionTypes.FETCH_PRODUCTS_FAIL :
            return {
                ...state ,
                error : true 
            }                  
        default : return state         
    }
}

export default reducer ;
