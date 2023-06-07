

import React, { useState } from 'react';
import { useGetUsersQuery } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectSelectedUsers } from './selectedUsersSlice';

function Users() {
  const dispatch = useDispatch();
  const selectedUsers = useSelector(selectSelectedUsers);
  const { data: users, isLoading } = useGetUsersQuery();
  const [nextUserIndex, setNextUserIndex] = useState(0);

  const handleAddUser = () => {
    dispatch(addUser(users[nextUserIndex]));
    setNextUserIndex((prevIndex) => prevIndex + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleAddUser}>Add a User</button>
      {selectedUsers.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
