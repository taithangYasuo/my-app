import {useStore, actions} from '../store'
import {Link} from 'react-router-dom'
import fanpage from '../assets/images/fanpage.jpg'


function Footer() {
    const [state, dispatch] = useStore()
    const {isAdd} = state 
    
    return (
        <div className='footer'>
            <div className='footer-email flex'>
                <div className='flex'>
                    <i className="fas fa-envelope-open-text"></i>   
                    <p>Đăng kí nhận tin</p>
                </div>
                <div className="footer-email-detail">
                    <input type="text" placeholder="Nhập email của bạn"/>
                    <button className="btn">ĐĂNG KÍ</button>
                </div>
                <div className="flex">
                    <i className="fas fa-phone-square-alt"></i>
                    <p>Hỗ trợ: <span>0981964486</span></p>
                </div>
            </div>
            <div className="footer-main flex">
                <div className="footer-main-introduce">
                    <h2>Giới thiệu</h2>
                    <p>A Little Leaf Tiệm tạp hóa của Tình yêu: dành cho những góc bạn yêu ở nơi được gọi là “Nhà”.</p>
                    <img src="https://file.hstatic.net/200000015764/file/received_1754223141376805_59040fcf298f4e7fb90e4298c2326793.jpeg" alt="" />
                </div>
                <div>
                    <h2>Liên kết</h2>
                    <ul>
                        <li><Link to="/">Tìm kiếm</Link></li>
                        <li><Link to="/">Giới thiệu</Link></li>
                        <li><Link to="/">Chính sách đổi trả</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Showroom</h2>
                    <ul>
                        <li className="flex">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <p>🌱Hanoi: 72-74 Nguyễn Văn Tuyết, Đống Đa</p>
                                <p>🌱Saigon: 18BIS/16 Nguyễn Thị Minh Khai, Quận 1</p>
                            </div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-tty"></i>
                            <div>
                                <p>Hanoi: 098.196.44.86</p>
                                <p>Saigon: 098.873.55.00</p>
                            </div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-paper-plane"></i>
                            <div><p>alittleleaf.homedecor@gmail.com</p></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Fanpage</h2>
                    <Link to="/"><img src={fanpage} alt="" /></Link>
                </div>
            </div>
            <div className='flex-col'>
                <p>Copyright © 2022 A Little Leaf. <Link to="/">Powered by Haravan</Link></p>
            </div>
        </div>
    )
}

export default Footer;