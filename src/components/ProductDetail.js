import { useState } from "react"
import { useStore, actions } from "../store";

function ProductDetail({product, productKey}) {
    const [quantity, setQuantity] = useState(1);
    const [state, dispatch] = useStore()

    const handleSub = () => {
        if(quantity > 1) setQuantity(quantity - 1)
    }

    const handleAddCart = () => {
        const productCart = {
            image: product.image[0],
            name: product.name,
            price: product.price,
            quantity: quantity,
            link: productKey
        }
        if(localStorage.getItem("cart")) {
            let cart = JSON.parse(localStorage.getItem("cart"));
            let cnt = 0
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].link == productKey) {
                    cnt ++
                    cart[i].quantity = cart[i].quantity + quantity 
                    break
                }
            }
            if(cnt == 0) {
                cart = [...cart, productCart]
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch(actions.setCart(cart))
        } else {
            const cart = [productCart]
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch(actions.setCart(cart))
        }
        //open subCart
        document.querySelector('.container').classList.add('active')
        document.querySelector('.cart-sub').classList.add('active')
        document.querySelector('.site-overlay').classList.add('active')
    }

    return (
        <div className="product-description">
            <div className="product-description-name">
                <h2>{product.name}</h2>
                <p>SKU: <span>{product.SKU}</span></p>
            </div>
            <div className="product-description-price">
                <p className="price">{product.price}<span>,000₫</span></p>
            </div>
            <div className="product-description-quantity">
                <button onClick={handleSub}>-</button>
                <input  
                    disabled
                    type="text" 
                    value={quantity} 
                    onChange={e=> {}}
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div className="product-description-cart">
                <button onClick={handleAddCart} className="btn">Thêm vào giỏ</button>
            </div>
            <div>
                <h4 style={{color: "#487264"}}>Mô tả</h4>
            </div>
            <div>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductDetail