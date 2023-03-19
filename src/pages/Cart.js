import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import CartProduct from "../components/CartProduct";
import HeaderPage from "../components/HeaderPage";

function Cart() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")))

    const quantity = useMemo(() => {
        const result = data.reduce((pre, cur) => {
            return pre + cur.quantity
        }, 0)
        return result
    }, [data])

    const total = useMemo(() => {
        const result = data.reduce((pre, cur) => {
            return pre + cur.price * cur.quantity
        }, 0)
        return result
    }, [data])

    return (
        <div className="cart">
            <HeaderPage
                prop1={`Giỏ hàng (${quantity})`}
            />
            <div className="content_cart">
                <div className="header_cart">
                    <h2>Giỏ hàng của bạn</h2>
                    <p>Có <span>{quantity}</span> sản phẩm trong giỏ hàng</p>
                </div>
                <CartProduct
                    data={data}
                    setData={setData}
                />
                <div className="footer_cart flex">
                    <textarea name="" placeholder="Ghi chu" id="" cols="30" rows="7"></textarea>
                    <div className="flex-col">
                        <p><span>
                            {
                                new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total + '000')
                            }
                        </span></p>
                        <div>
                            <Link to="/collections"><button className="btn">TIẾP TỤC MUA HÀNG</button></Link>
                            <button className="btn">CẬP NHẬT</button>
                            <Link to="/payment"><button className="btn">THANH TOÁN</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    {/* not product */}
                </div>
            </div>
        </div>
    )
}

export default Cart;