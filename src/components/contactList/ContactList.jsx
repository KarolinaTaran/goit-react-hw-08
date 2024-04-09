import React from "react";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactWrapper}>
      {filteredContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
