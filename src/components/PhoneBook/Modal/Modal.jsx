import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { ButtonClose, IMG, ModalContact, WrapDiv } from './Modal.styled';
import { editContactThunk } from '../../../redux/contacts/contacs-operations';
import { toast } from 'react-hot-toast';
import { ModalForm } from '../ModalForm/ModalForm';

export const Modal = ({ data, onClose }) => {
  const { name, number, image } = data;
  const dispatch = useDispatch();
  const closeModal = ({ currentTarget, target, code }) => {
    if (currentTarget === target || code === 'Escape') {
      onClose();
    }
  };

  const handleUpdateContact = values => {
    try {
      dispatch(editContactThunk({ ...data, ...values }));
      toast.success('Контакт оновлено');
      onClose();
    } catch (error) {
      toast.error('Упс! Сталася помилка під час оновлення');
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const handleKeyDown = event => {
  //     if (event.code === 'Escape') {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [onClose]);
  return (
    <ModalContact onClick={closeModal}>
      <ButtonClose type="button" onClick={onClose}>
        Close
      </ButtonClose>
      <WrapDiv>
        <IMG src={image} alt={name} />
        <div>
          <ModalForm
            initialValues={{
              name: name,
              number: number,
            }}
            onSubmit={handleUpdateContact}
          />
        </div>
      </WrapDiv>
    </ModalContact>
  );
};
