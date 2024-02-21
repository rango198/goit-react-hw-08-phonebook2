import { ContactsForm } from 'components/PhoneBook/ContactsForm/ContactsForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../redux/contacts/contacs-operations';
import { Filter } from 'components/PhoneBook/Filter/Filter';
import { ContactsList } from 'components/PhoneBook/ContactsList/ContactsList';
import { WrapContainer, WrapperList } from './Page.styled';

const PhoneBookPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <WrapContainer>
      {/* <WrapTitle>PhoneBook</WrapTitle> */}
      <div>
        <ContactsForm />
      </div>
      <WrapperList>
        <Filter />
        <ContactsList />
      </WrapperList>
    </WrapContainer>
  );
};

export default PhoneBookPage;
