import React, { useState } from 'react';

const CommentForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { title, body };
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          id="title"
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea 
          id="body"
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        />
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;