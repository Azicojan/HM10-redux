


import { createSlice } from '@reduxjs/toolkit';

const selectedPostsSlice = createSlice({
  name: 'selectedPosts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

export const { addPost, removePost } = selectedPostsSlice.actions;

export const selectSelectedPosts = (state) => state.selectedPosts;

export default selectedPostsSlice.reducer;


