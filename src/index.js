import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore , combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './store/reducers/cart';
import ProductReducer from './store/reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cart : CartReducer ,
  pro : ProductReducer
});
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

