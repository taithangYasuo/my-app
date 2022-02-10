function Topic({image, name}) {
    return (
        <div className="topic">
            <img src={image} alt="" />
            <div>
                <p>{name}</p>
                <button className="btn">XEM THÊM</button>
            </div>
        </div>
    )
}

export default Topic;