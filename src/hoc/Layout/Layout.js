import React , {Component} from 'react';
import classes from './Layout.module.css';

class Layout extends Component {
    render(){
        return(
            <div className={classes.grid_container}>
                
               <header><a href='/'><i class='fas fa-home' ></i></a></header>
               <main>{this.props.children}</main>
               <footer>All right is reserved</footer>
               
            </div> 
        )
    }
}

export default Layout ;