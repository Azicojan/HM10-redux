
// App.js

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Favorites from './Favorites';
import Users from './Users';
import Posts from './Posts';
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
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
