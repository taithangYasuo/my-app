export default function Form() {
    return (
        <div className="form">
            <h3>VIẾT BÌNH LUẬN</h3>
            <div className="flex">
                <input type="text" placeholder="Tên của bạn"/>
                <input type="text" placeholder="Email của bạn"/>
            </div>
            <div>
                <textarea name="" cols="30" rows="10" placeholder="Viết bình luận ..."></textarea> 
            </div>
            <button className="btn">GỬI BÀI VIẾT</button>
        </div>
    )
}