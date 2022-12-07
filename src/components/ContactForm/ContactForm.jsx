// import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

// const KEY = {
//   name: 'name',
//   number: 'number',
// };

export default function ContactForm({items, addContactsProps}) {
  // const [nameInput, setNameInput] = useState('');
  // const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  console.log(contacts);

  const nameInputId = nanoid();
  const telInputId = nanoid();

  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case KEY.name:
  //       setNameInput(value)
  //       break;
  //     case KEY.number:
  //       setNumber(value)
  //       break;
  //     default:
  //       console.log('Sorry, we are out of ' + name + '.');
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    let presentContact = false;

    contacts.map(({name}) => {
      if (name === form.name.value) {

        form.reset();

        presentContact = true;
        return alert(`${name} is already in contacts`);
      } else {
        return null;
      }
    });

    if (!presentContact) {
      dispatch(addContact(form.name.value, form.number.value));

      form.reset();
    }
  };

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameInputId}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            // value={nameInput}
            placeholder="Alex Krom"
            // onChange={handleChange}
          />
        </label>

        <label className={css.label} htmlFor={telInputId}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={telInputId}
            // value={number}
            placeholder="227-91-26"
            // onChange={handleChange}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
}

