// PostsPage.js

import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/postsSlice';
import { useState } from 'react';

const PostsPage = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [newPostTitle, setNewPostTitle] = useState('');



  const handleAddPost = () => {
    dispatch(addPost({ id: posts.length + 1, title: newPostTitle }));
    setNewPostTitle(''); // Reset the input field after adding the post
  };
  
  
  return (
    <div className='App' >
      <h2>Posts</h2>
      
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <input
         type="text"
         value={newPostTitle}
         onChange={(e) => setNewPostTitle(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>

    </div>
  );
};

export default PostsPage;
