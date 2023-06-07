



import React from 'react';
import { useGetPostsQuery } from './api';
import { useDispatch } from 'react-redux';
import { addPost } from './selectedPostsSlice';

function Posts() {
  const dispatch = useDispatch();
  const { data: posts, isLoading } = useGetPostsQuery();

  const handlePostClick = (post) => {
    dispatch(addPost(post));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} onClick={() => handlePostClick(post)}>
          <h3 style={{cursor:"pointer"}}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
