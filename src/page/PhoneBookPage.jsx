import { ContactsForm } from 'components/PhoneBook/ContactsForm/ContactsForm';

import { Filter } from 'components/PhoneBook/Filter/Filter';
import { ContactsList } from 'components/PhoneBook/ContactsList/ContactsList';
import { WrapContainer, WrapperList } from './Page.styled';

const PhoneBookPage = () => {
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
