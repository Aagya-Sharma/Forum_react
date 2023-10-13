import React from 'react';
import { Link } from 'react-router-dom';
import {useForumStore} from '../store';
import Navbar from '../components/NavBar';
import "../assets/css/ForumList.css"

function ForumList() {
  const forums = useForumStore((state) => state.forums);

  return (
    <>
      <Navbar />
      <div className='forum-list-container'>
        <h1>Forum List</h1>
        <ul >
          {forums.map((forum, index) => (
            <li key={index} class="list">
              <Link to={`/forum/${forum.id}`}>
                <h2 className="forumTitle"> {forum.title}</h2>
                <p>Created By {forum.author.username}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ForumList;
