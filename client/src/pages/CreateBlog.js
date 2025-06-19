import React from 'react';

const CreateBlog = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>➕ Create Blog</h2>
      <form>
        <input type="text" placeholder="Blog Title" /><br />
        <textarea placeholder="Content"></textarea><br />
        <input type="file" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
