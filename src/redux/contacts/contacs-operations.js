import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../api/contacts-api';

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsApi.getContacts();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'phonebook/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.addContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, email }, { getState }) => {
      const { phoneBook } = getState();
      const normalizedTitle = name.toLowerCase();
      const normalizedAuthor = email.toLowerCase();

      const dublicate = phoneBook.contacts.find(item => {
        const normalizedCurrentTitle = item.name.toLowerCase();
        const normalizedCurrentAuthor = item.email.toLowerCase();
        return (
          normalizedCurrentTitle === normalizedTitle &&
          normalizedCurrentAuthor === normalizedAuthor
        );
      });

      if (dublicate) {
        alert(`Book with ${name} and ${email} already in list`);
        return false;
      }
    },
  }
);

export const deleteContactThunk = createAsyncThunk(
  'books/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
