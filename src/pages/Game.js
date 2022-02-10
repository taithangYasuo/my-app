import { useEffect, useMemo, useRef, useState} from "react";
import { listImage } from "../assets/images";
import HeaderPage from "../components/HeaderPage";

const widthImage = 480 

export default function Game() {
    const [random, setRandom] = useState([])
    const [picture, setPicture] = useState(listImage[0])
    const [edge, setEdge] = useState(3)
    const [move, setMove] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const timeId = useRef() // set seconds

    const widthBlock = useMemo(() => {
        return widthImage / edge
    }, [edge])

    //Original image order
    const origin = useMemo(() => {
        return [...Array(edge * edge).keys()]
    }, [edge])

    console.log("reload")

    //Random image 
    useEffect(() => {
        const arr = origin.slice()
        const newArr = []

        for(let i = 0; i < origin.length; i++) {
            let random = Math.floor(Math.random() * arr.length)
            newArr.push(arr[random])
            arr.splice(random, 1)
        }
        setRandom(newArr)
    }, [picture, origin])

    //change image game
    const handleChangeImage = (index) => {
        setPicture(listImage[index])
    }

    // Find the way 
    const checkTheWay = (x, y, index) => {
        //Right = 0
        if(y < edge - 1) {
            if(random[index + 1] === edge * edge - 1)
                return 0
        }
        //Top = 1
        if(x !== 0) {
            if(random[index - edge] === edge * edge - 1)
                return 1
        }
        //Left = 2
        if(y !== 0) {
            if(random[index - 1] === edge * edge - 1)
                return 2
        }
        //Bottom = 3
        if(x < edge - 1) {
            if(random[index + edge] === edge * edge - 1)
                return 3
        }
        //Can't move
        return -1
    }

    //Swap order
    const swap = (x, y) => {
        const arr = random.slice()
        const h = arr[x]
        arr[x] = arr[y]
        arr[y] = h
        setRandom(arr)
    }

    // Action move
    const handleMove = (index) => {
        const x = Math.floor(index / edge)
        const y = index % edge

        switch (checkTheWay(x, y, index)) {
            case 0: //right
                swap(index, index + 1)
                break;
            case 1: //top
                swap(index, index - edge)
                break;
            case 2: //left
                swap(index, index - 1)
                break;
            case 3: //bottom
                swap(index, index + edge)
                break;
        
            default:
                break;
        }

        if(checkTheWay(x, y, index) !== - 1) setMove(pre => pre + 1)
    }

    //Action Reshuffle
    const handleReshuffle = () => {
        const arr = origin.slice()
        const newArr = []

        for(let i = 0; i < origin.length; i++) {
            let random = Math.floor(Math.random() * arr.length)
            newArr.push(arr[random])
            arr.splice(random, 1)
        }
        setRandom(newArr)

        setMove(0) //count again start moves
    }

    //Restart Moves
    useEffect(() => {
        setMove(0)
    }, [picture, edge])

    //Seconds
    useEffect(() => {
        if(move === 1) {
            timeId.current = setInterval(() => {
                setSeconds(pre => pre + 1)
            }, 1000);
        } 
        if(move === 0) {
            clearInterval(timeId.current)
            setSeconds(0)
        }
    }, [move])

    //Action Play again
    const handleCloseWin = () => {
        document.querySelector(".game-win").classList.remove("active")
        document.querySelector(".game-content-overlay").classList.remove("win")
        handleReshuffle()
    }

    // //Check Success
    useEffect(() => {
        let cnt = 0
        for(let i = 0; i < origin.length; i++) {
            if(random[i] !== origin[i])
                cnt ++
        }
        if(cnt === 0) { //win
            console.log(true)
            clearInterval(timeId.current)
            document.querySelector(".game-content-overlay").classList.add("win")
            document.querySelector(".game-win").classList.add("active")
        }
        else console.log(false)
    })

    return (
        <div className="game">
            <HeaderPage prop1={"Game"} prop2={"Picture Slider Puzzles"}/>
            <div className="flex">
                <div className="game-image">
                    <h1>IMAGE</h1>
                    <div>
                        {
                            listImage.map((image, index) =>(
                                <div key={index}>
                                    <img 
                                        onClick={() => handleChangeImage(index)}
                                        className={image === picture ? "active": ""}
                                        src={image} alt="" 
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div 
                    className="game-content" 
                    style={{
                        width: `${widthImage + 2}px`,
                        height: `${widthImage + 2}px`,
                    }}
                >
                    <div 
                        className="game-content-overlay"
                        style={{backgroundImage: `url(${picture})`,}}
                    >

                    </div>
                    {
                        random.map((value, index) => {
                            if(value !== edge * edge - 1) {
                                const x = Math.floor(index / edge)
                                const y = index % edge

                                const top = x * widthBlock
                                const left = y * widthBlock 

                                const x1 = value % edge
                                const y1 = Math.floor(value / edge)

                                const xPosition = x1 * widthBlock * (-1)
                                const yPosition = y1 * widthBlock * (-1)

                                return (
                                    <div key={index} 
                                        onClick={() => handleMove(index)}  //value?
                                        style={{
                                            left: `${left}px`,
                                            top : `${top}px`,
                                            width : `${widthBlock}px`,
                                            height : `${widthBlock}px`,
                                            backgroundImage: `url(${picture})`,
                                            backgroundPosition: `${xPosition}px ${yPosition}px`
                                        }}
                                    >
                                        <span>{value + 1}</span>
                                    </div>
                                )
                            } 
                            return ""
                        })
                    }
                </div>
                <div className="game-info">
                    <img src={picture} alt="" />
                    <div className="flex">
                        <p>Moves: <span>{move}</span></p>
                        <select
                            value={edge}
                            onChange={(e) => setEdge(Number(e.target.value))}
                        >
                            <option value="3">3 &times; 3</option>
                            <option value="4">4 &times; 4</option>
                            <option value="5">5 &times; 5</option>
                        </select>
                    </div>
                    <div>
                        <p>Seconds: <span>{seconds}</span></p>
                    </div>
                    <div>
                        <button onClick={handleReshuffle}><i className="fas fa-undo"></i>Restart</button>
                    </div>
                </div>
            </div>
            <div className="game-win">
                <div>
                    <h1>YOU WIN</h1>
                    <i className="fas fa-check"></i>
                    <h3>LEVEL: {edge} &times; {edge}</h3>
                    <p>You finished in <span>{Math.floor(seconds / 60)}</span>:<span>{seconds % 60}</span> and <span>{move}</span> moves</p>
                    <p>You can take a screenshot and send it to me to get a little gift from me ^^</p>
                    <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100034643640865">Xuân Sơn</a></p>
                    <button onClick={handleCloseWin}>Play again<i className="fas fa-caret-right"></i></button>
                    <div><i onClick={handleCloseWin} className="fas fa-times"></i></div>
                </div>
            </div>
        </div>
    )
}