import ContactList from "../components/contactList/ContactList";
import ContactForm from "../components/contactForm/ContactForm";
import SearchBox from "../components/searchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import { selectFilteredContacts } from "../redux/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </>
  );
};

export default Contacts;
