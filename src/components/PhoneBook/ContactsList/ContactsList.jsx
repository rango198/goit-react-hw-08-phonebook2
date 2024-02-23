import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectPhoneBookValue,
} from '../../../redux/contacts/contacs-selectors';
import { List } from './ContactsList.styled';
import { ItemContact } from '../ContactItem/ContactItem';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../../../redux/contacts/contacs-operations';
import Loader from 'components/Loader/Loader';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const phoneBook = useSelector(selectPhoneBookValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <>
      {isLoading && phoneBook?.length === 0 && <Loader />}
      {!error && (
        <List>
          {visibleContacts.map(contacts => {
            return (
              <Fragment key={contacts.id}>
                <ItemContact {...contacts} />
              </Fragment>
            );
          })}
        </List>
      )}
    </>
  );
};

// export const ContactsList = () => {
//   const visibleContacts = useSelector(selectFilteredContacts);
//   const phoneBook = useSelector(selectPhoneBookValue);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   return (
//     <>
//       {isLoading && phoneBook?.length === 0 && <Loader />}
//       {!error && (
//         <List>
//           {visibleContacts.map(contacts => {
//             return <ListItemContact key={contacts.id} {...contacts} />;
//           })}
//         </List>
//       )}
//     </>
//   );
// };
