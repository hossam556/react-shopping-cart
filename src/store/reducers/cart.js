import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartItems : JSON.parse(localStorage.getItem('cartItems')) ?
    JSON.parse(localStorage.getItem('cartItems')) : [] ,
    Email : '',
    Name : '',
    Address: '',
    order : {}
};


const addToCart = (state , action)=>{
     let alreadyInCart = false ;
     let cartItems = [...state.cartItems];
    
     cartItems.forEach(item=>{
        if(item._id === action.product._id){
            item.count++ ;
            alreadyInCart = true ;
        }
    })
    if(!alreadyInCart){
        cartItems.push({...action.product, count : 1})
    }
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

    return {
        ...state ,
        cartItems :cartItems 
    }
};

const reducer = (state =initialState, action)=> {
       switch(action.type){
           case actionTypes.ADD_TO_CART :
              return addToCart(state , action);
           case actionTypes.REMOVE_FROM_CART :
            const cartItems = state.cartItems.filter(item=> item._id !== action.product._id);
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
               return{
                   ...state ,
                  cartItems : cartItems
               };
            case actionTypes.INPUT_HANDLER :
                return {
                     ...state,
                     [action.e.target.name] : action.e.target.value
                };   
            case actionTypes.CREATE_ORDER :
                return {
                    ...state ,
                    order : {
                         ...state.order ,
                         Name : state.Name ,
                         Email : state.Email ,
                         Address : state.Address ,
                         cartItems : state.cartItems
                    }
                }            
           default : 
               return state ;    
       }
};

export default reducer ;