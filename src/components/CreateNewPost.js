import React, { useEffect, useState } from 'react'


const CreateNewPost = (props) => {
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  useEffect(() => {
      console.log(title)
      console.log(text)
  }, [title, text]);

  return (
    <div className='new-post-container'>
      <h2>Create New Post</h2>
      <div className='new-post-title-container'>
        <div>Title</div>
        <input onChange={(e) => {setTitle(e.target.value)}} required="required"></input>

      </div>
      <div className='new-post-text-container'>
        <div>Text</div>
        <textarea onChange={(e) => {setText(e.target.value)}} required="required"></textarea>
      </div>
      <div>
        <button type="button" onClick={((e) =>props.saveNewPost(e, {title, text}) )}>Save</button>
      </div>

       
    </div>
  )
}

export default CreateNewPost
