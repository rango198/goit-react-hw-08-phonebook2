import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../api/contacts-api';
import { toast } from 'react-hot-toast';

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsApi.getContacts();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'phoneBook/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.addContact(body);
      toast.success('Add contact', {
        duration: 3000,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { phoneBook } = getState();

      const normalizedName = name.toLowerCase();
      const normalizedPhone = number.trim();

      const dublicate = phoneBook.contacts.find(contact => {
        const normalizedCurrentName = contact.name.toLowerCase();
        const normalizedCurrentPhone = contact.number.trim();
        return (
          normalizedCurrentName === normalizedName &&
          normalizedCurrentPhone === normalizedPhone
        );
      });

      if (dublicate) {
        alert(`Book with ${name} and ${number} already in list`);
        return false;
      }
    },
  }
);

export const deleteContactThunk = createAsyncThunk(
  'phoneBook/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      toast.success('Contact Delete', {
        duration: 3000,
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'phoneBook/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await contactsApi.editContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const updateContactThunk = createAsyncThunk(
//   'contacts/editContact',
//   async (data, { rejectWithValue }) => {
//     try {
//       const { data: result } = await editContact(data);

//       toast.success('Contact Edit', {
//         duration: 3000,
//       });

//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
//     }
//   }
// );
