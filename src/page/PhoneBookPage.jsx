import { ContactsForm } from 'components/PhoneBook/ContactsForm/ContactsForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../redux/contacts/contacs-operations';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

const PhoneBookPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>PhoneBook</h1>
      <Filter />
      <ContactsList />
      <ContactsForm />
    </div>
  );
};

export default PhoneBookPage;
