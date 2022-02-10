import {Link} from 'react-router-dom'

function HeaderPage({prop1, prop2}) {
  return (
    <div className="header-page">
        <p><Link to="/">Trang chủ</Link> / <span>{prop1}</span> / <span>{prop2}</span></p>
    </div>
  )
};

export default HeaderPage;
