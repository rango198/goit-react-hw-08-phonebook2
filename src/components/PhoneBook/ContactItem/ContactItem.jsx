import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteContactThunk } from '../../../redux/contacts/contacs-operations';
import { BtnItem, LiItem } from '../ContactsList/ContactsList.styled';
import { selectIsLoading } from '../../../redux/contacts/contacs-selectors';
import Loader from 'components/Loader/Loader';
import { Modal } from '../Modal/Modal';

export const ItemContact = ({ id, name, number }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  return (
    <>
      <LiItem>
        <p onClick={() => setSelectedContact({ id, name, number })}>{name}:</p>

        <p>{number}</p>
        <BtnItem
          type="button"
          disabled={isLoading}
          onClick={() => deleteContact(id)}
        >
          <AiOutlineDelete />
          {isLoading && <Loader size={12} />}
          Delete
        </BtnItem>
      </LiItem>

      {selectedContact && <Modal data={selectedContact} onClose={closeModal} />}
    </>
  );
};
