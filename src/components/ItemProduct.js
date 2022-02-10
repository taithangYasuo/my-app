import {Link} from 'react-router-dom'

function ItemProduct({image, name, price, link}) {
    return (
        <div className="item-product flex-col">
            <Link to={`/product/${link}`}><img src={image} alt={name} /></Link>
            <Link to={`/product/${link}`}><h3>{name}</h3></Link>
            <p>{price},000<span>đ</span></p>
        </div>
    )
}

export default ItemProduct