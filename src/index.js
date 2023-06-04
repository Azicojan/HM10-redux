
//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import favoritesReducer from './reducers/favoritesSlice';
import usersReducer from './reducers/usersSlice';
import postsReducer from './reducers/postsSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Provider store={store}>
    <App />
   </Provider>
  
);

