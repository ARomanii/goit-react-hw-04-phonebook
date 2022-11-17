import React from 'react';
import { useState } from 'react';
import css from './contactform.module.css';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    handleSubmit({ name: name, number: number });
    form.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <form className={css.border} onSubmit={handleFormSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          onChange={handleChangeName}
          value={name}
        ></input>
        <h3>Number</h3>
        <input
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="000-00-00"
          type="tel"
          onChange={handleChangeNumber}
          value={number}
        ></input>
        <br />
        <button
          className={css.button}
          type="submit"
          disabled={
            {name} === "" || {number} === "" ? true : false
          }
        >
          {" "}
          Add contact
        </button>
      </form>
    </div>
  );
}


  