import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
// import { Modal } from 'components/Modal/Modal';
import { deleteContactThunk } from '../../../redux/contacts/contacs-operations';
import { BtnItem, ListItem } from '../ContactsList/ContactsList.styled';
import { selectIsLoading } from '../../../redux/contacts/contacs-selectors';
import Loader from 'components/Loader/Loader';
// import Loader from 'components/Loader/Loader';

export const ListItemContact = ({ id, name, number }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  console.log(selectedContact);

  // const closeModal = () => {
  //   setSelectedContact(null);
  // };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ListItem>
          <p onClick={() => setSelectedContact({ id, name, number })}>
            {name}:
          </p>

          <p>{number}</p>
          <BtnItem type="button" onClick={() => deleteContact(id)}>
            <AiOutlineDelete />
            Delete
          </BtnItem>
        </ListItem>
      )}

      {/* {selectedContact && <Modal data={selectedContact} onClose={closeModal} />} */}
    </>
  );
};
