import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/forumDetails.css';
import Navbar from '../components/NavBar';
import {useForumStore} from '../store';


function ForumDetails() {
  const { id } = useParams();
  const { forums, comments, addComment } = useForumStore();

  // Find the specific forum based on the id from the URL
  const forum = forums.find((forum) => forum.id === Number(id)) || {};

  const handleComment = (newComment) => {
    if (newComment) {
      // Use the addComment action from the Zustand store to add a new comment
      addComment(id, newComment);
      setNewComment('');
    }
  };

  const [newComment, setNewComment] = React.useState('');

  return (
    <>
      <Navbar />
      <div>
        <div className="forum-details-container">
          <h2 className="forumTitle">{forum.title}</h2>
          <p>Description:</p>
          <p>{forum.content}</p>

          <h3 className="comments">Comments</h3>
          <ul>
            {comments[id] && comments[id].map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>

          <div>
            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="commentButton"onClick={() => handleComment(newComment)}>Post Comment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForumDetails;
