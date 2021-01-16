import React ,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './Cart.module.css';
import CartItem from '../../components/cartItem/cartItem';
import Checkout from '../../components/checkout/checkout';
import Cmodal from '../../components/modal/Cmodal';
import formatCurrency from '../../util';
import * as actions from '../../store/actions/index';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';


class Cart extends Component{
    state = {
        showCheckout : false ,
        showModal : false 
    }

    showCheckout = ()=> {
        this.setState({showCheckout : true})
    }

    showModal =()=>{
        this.setState({showModal:true})
    }

    closeModal=()=> {
        this.setState({showModal:false})
    }

   
    render(){
        
        let cartItems = this.props.cItems.map(item =>{ 
            return <li key={item._id}>
                <CartItem 
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  count={item.count}
                  remove ={()=>this.props.removeItem(item)}/>
                  </li>
                 });

        let total = this.props.cItems.map(item=>{
            return item.price * item.count
        });

        let sum = total.reduce(function(a, b){
            return a + b;
        }, 0);

        let icon = {
            color:'rgb(77, 77, 77,100%) ' ,
        };
    
        

        return(
            <div className={classes.Cart}>
                {this.props.cItems.length === 0 ? <p>Cart is empty<i class='fas fa-shopping-cart'></i></p> 
                : <p>You have {' '}{this.props.cItems.length} in the cart
                <i class='fas fa-shopping-cart' style={icon}></i><span>{this.props.cItems.length}</span></p>
                }
                <Fade left cascade>
                 <ul>
                  {cartItems}
                 </ul>
                </Fade>
                {this.props.cItems.length !== 0 ? 
                <div className={classes.Total}>
                   <div>Total : {formatCurrency(sum)}</div> 
                   <button onClick={this.showCheckout}>Proceed</button>
               </div>
                : null}
                {this.state.showCheckout ?
                <Checkout inputHandler={this.props.onInputHandler}
                          createOrder={this.props.onCreateOrder}
                          openModal={this.showModal}/> :null}
                {this.state.showModal &&
                 <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <Cmodal
                      name={this.props.order.Name}
                      email={this.props.order.Email}
                      address={this.props.order.Address}
                      total={formatCurrency(sum)}
                      cItems={this.props.cItems}
                      closeModal={this.closeModal}/>
                 </Modal> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cItems : state.cart.cartItems ,
        order : state.cart.order
    }
} ;

const mapDispatchToProps = dispatch => {
    return {
        removeItem : (product)=> dispatch(actions.removeFromCart(product)),
        onInputHandler : (e)=> dispatch(actions.inputHandler(e)),
        onCreateOrder : (e)=> dispatch(actions.createOrder(e))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)  ;