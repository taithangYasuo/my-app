import { SET_CART} from "./constants";

let cart = [];
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem("cart"))
}

const initState = {
    cart : cart
}

function reducer(state, action) {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.cart
            }
        default:
            throw new Error('Invalid action.')
    }
}

export {initState}
export default reducer