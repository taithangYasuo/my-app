import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import HeaderPage from "../components/HeaderPage"
import NewBlog from "../components/NewBlog"
import { story, blogs } from "../data"
import Story from "./Story"

function Blog() {
    const {blogKey} = useParams()
    const {storyKey} = useParams()

    console.log(storyKey)

    const list = useMemo(() => {
        return blogs[blogKey]
    }, [blogKey])

    const title = useMemo(()=> {
        if(blogKey === "tui-minh-la-ban") return "Tụi Mình Là Bạn"
        else if(blogKey === "a-little-leaf-teams") return "A Little Story"
    }, [blogKey])
    
    return (
        <div className="blog">
            <HeaderPage 
                prop1={title}          
            />
            <div className="blog-content flex">
                <NewBlog story={story} list={list} blogKey={blogKey} /> 
                {
                    storyKey 
                    ? (
                        <Story storyDetail={story[storyKey]}/>
                    )
                    : (
                        <div className="list-blog"> 
                            <h1>{title}</h1>
                            <div className="list-blog-content">
                                {
                                    list.map((link, index) => (
                                        <div key={index} className="flex">
                                            <Link to={`/blogs/${blogKey}/${link}`}>
                                                <img src={story[link].image} alt="" />
                                            </Link>
                                            <div>
                                                <Link to={`/blogs/${blogKey}/${link}`}>{story[link].title}</Link>
                                                <h2>Người viết: {story[link].author} {story[link].date}</h2>
                                                <p>{story[link].content.slice(0, 120)}...</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Blog