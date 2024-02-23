import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
// import { Modal } from 'components/Modal/Modal';
import { deleteContactThunk } from '../../../redux/contacts/contacs-operations';
import { BtnItem, ListItem } from '../ContactsList/ContactsList.styled';
import Loader from 'components/Loader/Loader';

export const ListItemContact = ({ id, name, number }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoadingMap, setIsLoadingMap] = useState({});

  const dispatch = useDispatch();

  const deleteContact = contactId => {
    setIsLoadingMap(prevState => ({
      ...prevState,
      [contactId]: true,
    }));
    dispatch(deleteContactThunk(contactId));
  };
  console.log(selectedContact);

  // const closeModal = () => {
  //   setSelectedContact(null);
  // };

  return (
    <>
      <ListItem>
        <p onClick={() => setSelectedContact({ id, name, number })}>{name}:</p>

        <p>{number}</p>
        <BtnItem
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isLoadingMap[id]}
        >
          {isLoadingMap[id] && <Loader size={12} />}
          <AiOutlineDelete />
          Delete
        </BtnItem>
      </ListItem>
      {/* {selectedContact && <Modal data={selectedContact} onClose={closeModal} />} */}
    </>
  );
};
