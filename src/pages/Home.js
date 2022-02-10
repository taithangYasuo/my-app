import ItemProduct from "../components/ItemProduct";
import Slide from "../components/Slide";
import Topic from "../components/Topic";

const newProduct = [
    {
        image: "https://product.hstatic.net/200000015764/product/z3118531749594_d37f89f42a30a040cf6c6ca5fdbfd137_3095db7f4fe04ad6b84017e3a25c299e_grande.jpg",
        name: "Bình Hoa Nứt Lưu Ly",
        price: 580,
        link: "binh-hoa-nut-luu-ly"
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z2277520807822_e06aa55b9a340dec69e906c5bf35ae34_7e66154467bf44999c35b91088c1fbb3_grande.jpg",
        name : "Bộ Ấm Anh Đào Men Xanh",
        price: 650,
        link: "bo-am-anh-dao-men-xanh"
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z3110249493878_1d8e5a5285968eeec0803f2a46178fe8_91edc4819bcc49f0867bd3beaade4f3f_grande.jpg",
        name: "Bộ Ấm Sen (Túi Vải)",
        price: 980,
        link: "bo-am-sen-tui-vai"
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z3118532018524_1306b2c58f608ac339ff29e18a0eb5fb_e54c9c23bc1a49b180541c1d736e7c2e_grande.jpg",
        name: "Cốc Linh Lan Hồng (350ml)",
        price: 435,
        link: "coc-linh-lan-hong-350ml"
    },
    {
        image: "https://product.hstatic.net/200000015764/product/z2251651119987_c30f6006d495f99f80d22aa4ede88db5_635aa94921364a34ad9e870b70cad433_master.jpg",
        name: "Khay Mứt Chụp Thủy Tinh 2 Ngăn",
        price: 450,
        link: "khay-mut-chup-thuy-tinh-2-ngan"
    }
]

const topics = [
    {
        image: "https://file.hstatic.net/200000015764/file/z3075129791891_bc4593a2afd6eb37c1fb1ec72436aa51__1__b5bd36967bdb49f394a25a946824c8a7.jpg",
        name: "Rừng & Suối",
    },
    {
        image: "https://file.hstatic.net/200000015764/file/z3072890032517_657e9a1257f3e00651eab509ced3fdae_42e7fe3e25584684b879022c02a4541c.jpg",
        name: "Vòng Tết",
    },
    {
        image: "https://file.hstatic.net/200000015764/file/z3103200055405_ea56b270ab0b68e45811a1fdff57f205_6d1f8d17dd114cee88fb06eb269ee1b7.jpg",
        name: "Thảo Mộc",
    }
]

function Home() {
    return (
        <div className="home">
            <Slide></Slide>
            <div className="home-new-product">
                <h1>Sản Phẩm Mới</h1>
                <div className="flex">
                    {
                        newProduct.map((product, index) => (
                            <ItemProduct
                                key={index}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                link={product.link}
                            />
                        ))
                    }
                </div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="home-topic flex">
                {
                    topics.map((topic, index) => (
                        <Topic
                            key={index}
                            image={topic.image}
                            name={topic.name}
                        />
                    ))
                }
            </div>
            <div className="home-banner">
                <div>
                    <h2>A Little Leaf</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;