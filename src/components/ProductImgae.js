function ProductImage({image}) {

    return (
        <div className={image.length == 1 ? "product-image flex once" : "product-image flex"}>
            {
                image.length == 1 
                ? (
                    <>
                        <div></div>
                        <div className="flex-col">
                            <img src={image[0]} alt="" />
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="flex-col">
                            {
                                image.map((src, index) => (
                                    <a key={index} href={`#${index}`}>
                                        <img src={src} alt="" />
                                    </a>
                                ))
                            }
                        </div>
                        <div className="flex-col">
                            {
                                image.map((src, index) => (
                                    <img key={index} id={index} src={src.replace("compact", "master")} alt="" />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ProductImage