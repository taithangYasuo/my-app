import { useEffect, useState } from "react";

const slide = [
    "https://file.hstatic.net/200000015764/file/12_416ca8e8afce40d7b461d6b4c16badf9.png",
    "https://file.hstatic.net/200000015764/file/mjj_37a45c204c02447f82d152c15c001e61.png",
    "https://file.hstatic.net/200000015764/file/1234_1e200f0d67ab4956aaa4411dbbca03e9.png",
    ]

function Slide() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timeSlide = setInterval(() => {
            if(currentSlide == slide.length - 1) {
                setCurrentSlide(0)
            } else setCurrentSlide(preSlide => preSlide + 1)
        }, 5000)

        return () => clearInterval(timeSlide)
    }, [currentSlide])

    const handleClickLeft = () => {
        if(currentSlide == 0) {
            setCurrentSlide(slide.length - 1)
        } else setCurrentSlide(preSlide => preSlide - 1)
    }

    const handleClickRight = () => {
        if(currentSlide == slide.length - 1) {
            setCurrentSlide(0)
        } else setCurrentSlide(preSlide => preSlide + 1)
    }

    return (
        <div className="home-slide">
            <img src={slide[currentSlide]} alt="" />
            <button className="home-slide-left"><i onClick={handleClickLeft} className="fas fa-long-arrow-alt-left"></i></button>
            <button className="home-slide-right"><i onClick={handleClickRight} className="fas fa-long-arrow-alt-right"></i></button>
        </div>
    )
}

export default Slide;