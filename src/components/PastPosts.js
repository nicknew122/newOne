import React from 'react'
import moment from 'moment'

const PastPosts = (props) => {
  console.log(props.allPosts)


    
  return (
    <div className="past-posts-container">
      <h2>Past Posts</h2>
      {props.allPosts.map((post, idx) => (
        <div key={post.id}>
          <div className='past-posts-meta-data'>
            <span>{moment(post.timestamp).format("MMM DD YYYY")}</span>
            <span>{post.title}</span>
          </div>
        </div>
      ))}

      <div onClick={(e) => {props.setShowCreateNewPost(!props.showCreateNewPost)}} className='create-new-post-link'>(Create New Post)</div>
    </div>
  )
}

export default PastPosts
