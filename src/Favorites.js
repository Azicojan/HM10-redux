
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedPosts, removePost } from './selectedPostsSlice';

function Favorites() {
  const selectedPosts = useSelector(selectSelectedPosts);
  const dispatch = useDispatch();

  const handleRemovePost = (postId) => {
    dispatch(removePost(postId));
  };

  return (
    <div>
      <h1>Favorites</h1>
      {selectedPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleRemovePost(post.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
