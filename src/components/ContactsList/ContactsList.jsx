import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/contacs-selectors';
import { List } from './ContactsList.styled';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const bookContacts = useSelector(selectContacts);
  console.log(bookContacts);
  return (
    <>
      <List>
        {visibleContacts.map(contacts => {
          return (
            <li key={contacts.id}>
              <p>{contacts.name}</p>
            </li>
          );
          // return <ListItemContact key={contacts.id} {...contacts} />;
        })}
      </List>
    </>
  );
};
