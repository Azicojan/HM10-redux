
import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import selectedPostsReducer from './selectedPostsSlice';
import selectedUsersReducer from './selectedUsersSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    selectedPosts: selectedPostsReducer,
    selectedUsers: selectedUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
