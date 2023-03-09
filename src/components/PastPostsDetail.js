import React from "react";
import moment from "moment";
moment().format("MMM Do YY"); 

export default function PastPostsDetail(props) {


  // func to format timestamp to shorter use moment

  return (
    <div className="past-posts-detail-container">
      {props.allPosts.map((post, idx) => (
        <div className="indv-post" key={post.id}>
          <div>
            <span className="indv-title">{post.title}</span>
            <span className="indv-date">{moment(post.timestamp).format("MMM Do YY")}</span>
          </div>
          <div>{post.text}</div>
          <div className="idv-buttons-container">
            <button>Edit</button>
            <button onClick={(e) => props.deletePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
