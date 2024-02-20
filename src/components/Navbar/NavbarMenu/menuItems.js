import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home page',
    private: false,
  },
  {
    id: nanoid(),
    to: '/phonebookpage',
    text: 'PhoneBook',
    private: true,
  },
];

export default menuItems;
