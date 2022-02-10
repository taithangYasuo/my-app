import { useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';

import Form from "../components/Form"

function Story({ storyDetail }) {

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error));
    })

    const listContent = useMemo(() => {
        const l = storyDetail.content.split("\n")
        return l
    }, [storyDetail])

    return (
        <div className="story">
            <img src={storyDetail.image} alt="" />
            <div className="story-content">
                <h1>{storyDetail.title}</h1>
                <h2>Người viết: {storyDetail.author} lúc {storyDetail.date}   <i className="far fa-file-alt"></i> <Link to="#">A Little Story</Link> - <i className="far fa-comment"></i> <Link to="#">0 Bình luận</Link></h2>
                {
                    listContent.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))
                }
            </div>
            <Form />
        </div>
    )
}

export default Story