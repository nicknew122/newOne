import React, { useState } from 'react'

export default function EditPost(props) {
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  return (
    <div className='edit-post-container'>
      <h2>Edit Post</h2>
      <div className='edit-post-title-container'>
        <div>Title</div>
        <input onChange={(e) => {setTitle(e.target.value)}} required="required"></input>

      </div>
      <div className='edit-post-text-container'>
        <div>Text</div>
        <textarea onChange={(e) => {setText(e.target.value)}} required="required"></textarea>
      </div>
      <div>
        <button type="button" onClick={((e) =>props.editPost(e, {title, text}) )}>Save</button>
      </div>

       
    </div>
  )
}
