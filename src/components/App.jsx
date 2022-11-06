import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    const chechedName = contact.name;
    const avaibleNames = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );

    if (avaibleNames.includes(chechedName.toLowerCase())) {
      alert(`${chechedName} is already in contacts`);
    } else
      this.setState({
        contacts: [...this.state.contacts, contact],
      });
  };

  handleSearchInput = (event) => {
    event.preventDefault();
    this.setState({
      filter: event.target.value,
    });
  };

  contactFilter = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const actualContacts = localStorage.getItem("contacts");
    if (actualContacts) {
      const contacts = JSON.parse(actualContacts);
      this.setState({ contacts });
    }
  }

  handleDelete = (event) => {
    const id = event.target.id;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };
  render() {
    const filteredNames = this.contactFilter();
    return (
      <>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contact</h2>
        {this.state.contacts.length === 0 ? (
          <p>Contacts list is empty!!!</p>
        ) : (
          <>
            <Filter onFilter={this.handleSearchInput}></Filter>
            <ContactList
              contacts={filteredNames}
              onDelete={this.handleDelete}
            ></ContactList>
          </>
        )}
      </>
    );
  }
}