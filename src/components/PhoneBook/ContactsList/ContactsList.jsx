import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../../redux/contacts/contacs-selectors';
import { List } from './ContactsList.styled';
import { ListItemContact } from '../ContactItem/ContactItem';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

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
