import HeaderPage from "../components/HeaderPage";
import ListProduct from "../components/ListProduct";
import Sidebar from "../components/Sidebar";

function Collection() {
    return (
        <div className="product">
            <HeaderPage
                prop1='Danh mục'
                prop2='Tất cả sản phẩm'
            />
            <div className="product-banner">
                <img src="https://img.freepik.com/free-vector/flat-black-friday-twitch-banner_23-2149122298.jpg?w=2000" alt="" />
            </div>
            <div className="flex">
                <Sidebar />
                <ListProduct name="hue" />
            </div>
        </div>
    )
}

export default Collection;