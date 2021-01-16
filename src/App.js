import React ,{Component}from 'react';
import Layout from './hoc/Layout/Layout';
import Products from './container/Products/Products';
import Cart from './container/Cart/Cart';


class App extends Component {
  render(){
       return(
         <Layout>
           <Products/>
           <Cart/>
         </Layout>
       )
  }
}

export default App;
