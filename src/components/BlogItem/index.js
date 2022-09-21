// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishedDate} = BlogDetails
  return (
    <div className="blog-item-container">
      <div className="blog-title-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>

      <p className="description">{description}</p>
      <hr />
    </div>
  )
}
export default BlogItem
