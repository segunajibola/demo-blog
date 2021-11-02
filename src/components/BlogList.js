import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
           <h2>{title}</h2>
           {blogs.map((eachBlog) => (
                <div className="blog-preview" key={eachBlog.id}>
                    <Link to={ `/blogs/${eachBlog.id}` }>
                    <h2>{eachBlog.title}</h2>
                    <p>Written by {eachBlog.author}</p>
                    {/* <button onClick={() => handleDelete(eachBlog.id)}>Delete Blog</button> */}
                    </Link>

                </div>
            ))} 
        </div>
    )
}

export default BlogList;
