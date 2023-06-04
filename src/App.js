
// App.js

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FavoritesPage from './components/FavoritesPage';
import UsersPage from './components/UsersPage';
import PostsPage from './components/PostsPage';
import './App.css'

const App = () => {
  

  

  

  return (
    <BrowserRouter>
      <nav className='App'>
        <ul style={{listStyleType:"none"}}>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        
        
      </nav>

      <Routes>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
