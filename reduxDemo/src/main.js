import { createStore } from "redux";
import rootReducer from './reducers/index';
import { addToCart }  from './actions/cart-action';
import { deleteFromCart } from './actions/cart-action';

const store = createStore(rootReducer);

console.log(store.getState());


store.dispatch(addToCart("xiaomi","3",800));
store.dispatch(deleteFromCart("milk 500ml")); 

store.subscribe(rootReducer);

console.log(store.getState());

