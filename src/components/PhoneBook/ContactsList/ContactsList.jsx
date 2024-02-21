import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../../redux/contacts/contacs-selectors';
import { List } from './ContactsList.styled';
import { ListItemContact } from '../ContactItem/ContactItem';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const bookContacts = useSelector(selectContacts);
  console.log(bookContacts);
  return (
    <>
      <List>
        {visibleContacts.map(contacts => {
          return <ListItemContact key={contacts.id} {...contacts} />;
        })}
      </List>
    </>
  );
};
