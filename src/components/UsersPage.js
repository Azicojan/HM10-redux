// UsersPage.js

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../reducers/usersSlice';
import { useState } from 'react';




const UsersPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    dispatch(addUser({ id: users.length + 1, name: newUserName }));
    setNewUserName(''); // Reset the input field after adding the user
  };
  
  

  return (
    <div className='App'>
      <h2>Users</h2>
      
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>

      </div>
    );
  
};

export default UsersPage;
