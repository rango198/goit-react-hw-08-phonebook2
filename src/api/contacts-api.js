import instance from './auth-api';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async body => {
  const { data } = await instance.post('/contacts', body);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

// export const editContact = async body => {
//   const { data } = await instance.patch(`/contacts/${body.id}`, body);
//   return data;
// };
export const editContact = contact => {
  return instance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
};
