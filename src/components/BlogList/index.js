// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="container">
      {blogsList.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  )
}
export default BlogList
