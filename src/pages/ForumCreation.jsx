import React, { useState } from 'react';
import {useForumStore} from '../store';
import "../assets/css/forumCretaion.css";
import { shallow } from "zustand/shallow";
import Navbar from '../components/NavBar';
import {  useNavigate } from "react-router-dom";

function ForumCreation() {
  const [newForumTitle, setNewForumTitle] = useState('');
  const [newForumContent, setNewForumContent] = useState('');
  const {
  addForum,user
    } = useForumStore(
      (state) => ({
        addForum: state.addForum,
          user:state.user
      }),
      shallow
    );
  const navigate = useNavigate()

  const handleCreateForum = () => {
    if (newForumTitle && newForumContent) {
      const newForum = {
        id: Date.now(),
        title: newForumTitle,
        content: newForumContent,
        author:user
      };

      // Use the addForum action to add the new forum to the Zustand store
      addForum(newForum);

      // Reset the input fields
      setNewForumTitle('');
      setNewForumContent('');

      //navigate to forum list
      navigate("/forums")
    }
  };

  return (
    <>
      <Navbar />
      <div className="forum-creation-container">
        <h3 className="forum">Create a New Forum</h3>
        <label>Forum Title</label>
        <input
          type="text"
          value={newForumTitle}
          onChange={(e) => setNewForumTitle(e.target.value)}
        />
        <label>Forum Title</label>
        <textarea
          value={newForumContent}
          onChange={(e) => setNewForumContent(e.target.value)}
        />
        <button className="creationButton" onClick={handleCreateForum}>Create Forum</button>
      </div>
    </>
  );
}

export default ForumCreation;
