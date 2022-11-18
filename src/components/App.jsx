import React, { useState, useEffect } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
 

 const [filter, setFilter] = useState ('');


 useEffect(() => {
  window.localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]); 
  
  const onSubmitForm = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    contacts.some((i) => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const onFilterInput = e => {    
    setFilter( e.currentTarget.value)
  };

  const onFilterChange = () => {
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const onDeleteContactClick = (id) => {
    setContacts(contacts.filter((i) => i.id !== id));
  };

    return (
      <>
   
        <ContactForm onSubmitForm={onSubmitForm} />
        <Filter value={filter} onFilter={onFilterInput} />
        <h2>Contacts</h2>
        <ContactList
          contacts={onFilterChange()}
          onDeleteClick={onDeleteContactClick}
        />
      </>
    );
  }



