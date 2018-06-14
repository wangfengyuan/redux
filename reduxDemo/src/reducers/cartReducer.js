import { ADD_TO_CART } from "../actions/cart-action"
import { DELETE_FROM_CART } from "../actions/cart-action"

const initialState = {
    cart: [
      {
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
      },
      {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 48
      }
    ]
}

export default function(state=initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
            cart: [...state.cart, action.payload]
        }
      }
      case DELETE_FROM_CART: {
        return {
            cart: state.cart.filter(item => item.product !== action.payload.product)
        }
      }
      default:
        return state;
    }
}