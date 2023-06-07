
import { createSlice } from '@reduxjs/toolkit';

const selectedUsersSlice = createSlice({
  name: 'selectedUsers',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = selectedUsersSlice.actions;

export const selectSelectedUsers = (state) => state.selectedUsers;

export default selectedUsersSlice.reducer;
