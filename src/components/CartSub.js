import { Link } from "react-router-dom"
import { useMemo } from "react"
import { useStore } from "../store"
import CartSubProduct from "./CartSubProduct"

function CartSub() {
    const [state, dispatch] = useStore()

    const closeCart = () => {
        document.querySelector('.container').classList.remove('active')
        document.querySelector('.cart-sub').classList.remove('active')
        document.querySelector('.site-overlay').classList.remove('active')
    }

    const total = useMemo(() => {
        const result = state.cart.reduce((pre, cur) => {
            return pre + cur.price * cur.quantity
        }, 0)
        return result
    }, [state])

    return (
        <div className='cart-sub'>
            <div>
                <h1>GIỎ HÀNG</h1>
                <CartSubProduct />
                <div className="flex cart-sub-total">
                    <p>TỔNG TIỀN:</p>
                    <p> {
                        new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total + '000')
                    }
                    </p>
                </div>
                <div className="flex cart-sub-payload">
                    <Link to="/cart"><button onClick={closeCart} className="btn">XEM GIỎ HÀNG</button></Link>
                    <Link to="/payment"><button onClick={closeCart} className="btn">THANH TOÁN</button></Link>
                </div>
                <i onClick={closeCart} className="fas fa-times"></i>
            </div>
        </div>
    )
}

export default CartSub