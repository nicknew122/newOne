import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PastPosts from "./components/PastPosts";
import PastPostsDetail from "./components/PastPostsDetail";
import { MAIN_URL } from "./constants/constant";
import CreateNewPost from "./components/CreateNewPost";
import { nanoid } from "nanoid";
import EditPost from "./components/EditPost";


export const AppContext = React.createContext();

function App() {
  let [allPosts, setAllPosts] = useState([]);
  let [showCreateNewPost, setShowCreateNewPost] = useState(false);
  let [showEditNewPost, setShowEditNewPost] = useState(false);


  

  useEffect(() => {
    fetchAllPosts();
  }, []);

  let fetchAllPosts = async () => {
    try {
      const response = await fetch(MAIN_URL);
      const data = await response.json();
      setAllPosts(data.response);
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };

  let deletePost = async (id) => {
    // will need to also remove out of allPosts data here since api IF successful since APi doesn't return data back

    try {
      const response = await fetch(MAIN_URL + `/${id}`, { method: "DELETE" });
      const data = await response.json();
      console.log("data from delete", data);
    } catch (error) {
      console.error(error);
    }
  };


  let saveNewPost = async (e, data) => {
    e.preventDefault();

    try {
      const response = await fetch(MAIN_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log("responseData from create", responseData);

    } catch (error) {
      console.error(error);
    }
  };


  let saveEditPost = async (e, data) => {
    e.preventDefault();
    console.log("in edit", data)

    // try {
    //   const response = await fetch(MAIN_URL, {
    //     method: 'Put',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   });

    //   const responseData = await response.json();
    //   console.log("responseData from create", responseData);

    // } catch (error) {
    //   console.error(error);
    // }
  };


  return (
    <AppContext.Provider value>
      <div className="app-container">
        <nav>
          <h1>My Blog</h1>
        </nav>
        {!showCreateNewPost && (
          <div className="main-section-container">
            <PastPosts
              allPosts={allPosts}
              setShowCreateNewPost={setShowCreateNewPost}
              showCreateNewPost={showCreateNewPost}
            ></PastPosts>
            <PastPostsDetail
              allPosts={allPosts}
              deletePost={deletePost}
            ></PastPostsDetail>
          </div>
        )}

        {showCreateNewPost && <CreateNewPost saveNewPost={saveNewPost}></CreateNewPost>}
        {showEditNewPost && <EditPost saveEditPost={saveEditPost}></EditPost>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
