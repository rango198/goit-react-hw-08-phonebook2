import { createSlice } from '@reduxjs/toolkit';

import { pending, rejected } from '../../shared/functions/redux';
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  getContactsThunk,
} from './contacs-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, pending)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContactsThunk.rejected, rejected)
      .addCase(addContactThunk.pending, pending)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
      })
      .addCase(deleteContactThunk.pending, pending)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContactThunk.rejected, rejected)
      .addCase(editContactThunk.pending, pending)
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.map(contact =>
          contact.id === payload.id ? payload : contact
        );
        state.error = null;
      });
  },
});

export default phoneBookSlice.reducer;
