import {Link} from 'react-router-dom'

function NewBlog({story, list, blogKey}) {
    return (
        <div className="new-blog">
            <h1>NEW STORY</h1>
            <div>
                {
                    list.map((link, index) => (
                        <div key={index} className="flex">
                            <Link to={`/blogs/${blogKey}/${link}`}>
                                <img src={story[link].image} alt="" />
                            </Link>
                            <div>
                                <Link to={`/blogs/${blogKey}/${link}`}><h2>{story[link].title}</h2></Link>
                                <p>{story[link].author} <span>{story[link].date}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div> 
    )
}
export default NewBlog