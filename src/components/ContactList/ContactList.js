import React from "react";
import PropTypes from "prop-types";
import styles from "./contactlist.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map((item) => (
      <li key={item.id}>
        {item.name} : {item.number}
        <button id={item.id} onClick={onDelete}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};