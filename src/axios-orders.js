import axios from 'axios';

const instance = axios.create({
    baseURL :"/react-shopping-cart-98508-default-rtdb.firebaseio.com/"
});

export default instance ; 