import { createSelector } from '@reduxjs/toolkit';

//contacts
export const selectIsLoading = ({ phoneBook }) => phoneBook.isLoading;
export const selectError = ({ phoneBook }) => phoneBook.error;
export const selectFilter = ({ filter }) => filter;
export const selectContacts = ({ phoneBook }) => phoneBook.contacts;

export const selectPhoneBookValue = createSelector(selectContacts, contacts =>
  [...contacts].sort((a, b) => a.name.localeCompare(b.name))
);

export const selectFilteredContacts = createSelector(
  [selectPhoneBookValue, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);
