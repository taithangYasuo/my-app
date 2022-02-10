function SiteOverLay() {

    const closeCart = () => {
        document.querySelector('.container').classList.remove('active')
        document.querySelector('.cart-sub').classList.remove('active')
        document.querySelector('.site-overlay').classList.remove('active')
    }

    return (
        <div onClick={closeCart} className='site-overlay'>

        </div>
    )
}

export default SiteOverLay