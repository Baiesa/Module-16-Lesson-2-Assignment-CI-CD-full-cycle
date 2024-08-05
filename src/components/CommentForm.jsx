import React, { useState } from 'react';

const CommentForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { title, body };
    localStorage.setItem('comments', JSON.stringify(comment));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        />
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;