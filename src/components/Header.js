import {Link} from 'react-router-dom'
import { useState, useEffect, useMemo} from 'react'

import logo from '../assets/images/logo.jpg'
import Menu from './Menu';
import { useStore, actions } from '../store'

function Header() {
    const [scrollToTop, setScrollToTop] = useState(false);
    const [state, dispatch] = useStore()

    // quantity - product - cart
    const quantity = useMemo(() => {
        const result = state.cart.reduce((pre, cur) => {
            return pre + cur.quantity
        }, 0)
        return result
    }, [state])

    // action scroll 
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 150) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    //click button scroll
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    //click cart
    const openCart = () => {
        document.querySelector('.container').classList.add('active')
        document.querySelector('.cart-sub').classList.add('active')
        document.querySelector('.site-overlay').classList.add('active')
    }
    
    return (
        <div className='header'>
            <div className='header-main'>
                <div className='flex'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <ul className='flex'>
                        <li><Link to="/login"><i className="fas fa-user-circle"></i></Link></li>
                        <li><i className="fas fa-search"></i></li>
                        <li><i onClick={openCart} className="fas fa-shopping-cart"><span>{quantity}</span></i></li>
                    </ul>
                </div>
                <Menu ></Menu>
            </div>
            {scrollToTop && (
                <div>
                    <div className='header-scroll flex'>
                        <img src={logo} alt="" />
                        <Menu></Menu>
                        <ul className='flex'>
                            <li><Link to="/login"><i className="fas fa-user-circle"></i></Link></li>
                            <li><i className="fas fa-search"></i></li>
                            <li><i onClick={openCart} className="fas fa-shopping-cart"><span>{quantity}</span></i></li>
                        </ul>
                    </div>
                    <div className='scrollToTop'>
                        <button onClick={handleScrollToTop}><i className="fas fa-chevron-up"></i></button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;