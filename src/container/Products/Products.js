import React ,{Component} from 'react';
import {connect} from 'react-redux';
import Product from '../../components/Product/Product';
import Filter from '../../components/Filter/Filter';
import PModal from '../../components/modal/Pmodal';
import classes from './Products.module.css';
import * as actions from '../../store/actions/index';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import Spinner from '../../components/UI/spinner/spinner';



class Products extends Component{

    componentDidMount=()=>{
        this.props.onFetchProducts()
    }
    

    render(){

        let products =this.props.error ? <p>Products can't be loaded</p> : <Spinner/>;
        let filter = null ;

        if(this.props.products){
         products =this.props.products.map(product=>{
            return <li key={product._id}>
                     <Product
                        addToCart={()=>this.props.onAddToCart(product)} 
                        openModal={()=>this.props.onOpenModal(product)}
                        img={product.image}
                        title={product.title}
                        price={product.price}
                        id={product._id}/>
                   </li> 
          });
         filter =  <Filter 
          count={this.props.products.length}
          size ={this.props.size}
          sort={this.props.sort}
          productSort = {this.props.onProductSort}
          productFilter={this.props.onProductFilter}/>
         }

        return(
            <div className={classes.Products}>
             {filter}
             <Fade bottom cascade>
             <ul>
                {products}
             </ul>
             </Fade>
             {this.props.product && 
             <Modal isOpen={true} onRequestClose={this.props.onCloseModal}>
                 <Zoom>
                     <PModal 
                     closeModal={this.props.onCloseModal}
                     img={this.props.product.image}
                     title={this.props.product.title}
                     description={this.props.product.description}
                     availableSizes={this.props.product.availableSizes}
                     price={this.props.product.price}
                     addToCart={()=>{
                         this.props.onAddToCart(this.props.product)
                         this.props.onCloseModal()}}/>
                 </Zoom>
             </Modal>}
            </div>
        )
    }
}

const mapStateToprops = state =>{
    return {
        size : state.pro.size,
        sort : state.pro.sort ,
        products : state.pro.products,
        product : state.pro.product,
        error : state.pro.error ,
        loading : state.pro.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAddToCart : (product)=> dispatch(actions.addToCart(product)),
        onProductFilter :(event)=> dispatch(actions.productFilter(event)),
        onProductSort :(event)=> dispatch(actions.productSort(event)),
        onOpenModal : (product)=> dispatch(actions.openModal(product)),
        onCloseModal : ()=> dispatch(actions.closeModal()) ,
        onFetchProducts : ()=> dispatch(actions.fetchProducts())
};
}

export default connect(mapStateToprops,mapDispatchToProps)(Products) ;