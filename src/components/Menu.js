import {Link} from 'react-router-dom'
import { useState} from 'react'

function Menu() {
    const [active, setActive] = useState(0);

    return (
        <div className='header-menu'>
            <ul className='flex'>
                <li className='active'><Link to='/'>Trang chủ</Link></li>
                <li><Link to='collections'>Sản Phẩm</Link>
                    <ul>
                        <li><Link to="">Bếp</Link>
                            <ul>
                                <li><Link to="">Xoong, Nồi, Chảo</Link></li>
                                <li><Link to="">Giá, Kệ Đa Năng</Link></li>
                                <li><Link to="">Phụ Kiện Bếp</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">Cốc, Ly</Link></li>
                        <li><a href="">Trà Chiều</a></li>
                        <li><Link to="">Chăm Sóc Chúng Mình</Link></li>
                        <li><Link to="">Thiền Định An Yên</Link></li>
                        <li><Link to="">Trang Trí Nhà Cửa</Link></li>
        
                    </ul>
                </li>
                <li><Link to='/collections'>TẾT ĐỦ ĐÂY</Link></li>
                <li><Link to='/blogs/a-little-leaf-teams'>A Little Story</Link></li>
                <li><Link to='/blogs/tui-minh-la-ban'>Tụi Mình Là Bạn</Link></li>
            </ul>
        </div>
    )
}

export default Menu;