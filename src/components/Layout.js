import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./Header"
import Footer from './Footer'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Collection from '../pages/Collection'
import Login from '../pages/Login'
import ListProduct from './ListProduct'
import Product from '../pages/Product'
import SiteOverLay from './SiteOverLay'
import CartSub from './CartSub'
import Blog from '../pages/Blog'
import Story from '../pages/Story'
import Game from '../pages/Game'
 
function Layout() {

    return (
        <Router>
            <div className='container'>
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="" element={<Home />}/>
                        <Route path="cart" element={<Cart />}/>
                        <Route path="collections" element={<Collection />}> 
                            <Route path=":collectionKey" element={<ListProduct />} />
                            <Route index element={<ListProduct />} />
                        </Route>
                        <Route path="login" element={<Login />}/>
                        <Route path="product" element={<Product />}>
                            <Route path=":productKey" element={<Product />} />
                        </Route>
                        <Route path="blogs" element= {<Blog />}>
                            <Route path=":blogKey" element={<Blog />}>
                                <Route path=":storyKey" element={<Story />} />
                            </Route> 
                        </Route>
                        <Route path="game" element={<Game />}/>
                    </Routes>
                </div>
                <Footer />
                <SiteOverLay />
            </div>
            <CartSub />
        </Router>
    )
}

export default Layout;