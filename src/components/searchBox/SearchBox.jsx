import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchContact = useSelector(selectNameFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <p className={css.heading}>Find contact by name:</p>
      <input
        className={css.searchBox}
        type="text"
        placeholder="Type contact's name..."
        title="Type contact's name"
        value={searchContact}
        onChange={handleChange}
      />
      {filteredContacts.map((contact) => (
        <div key={contact.id}></div>
      ))}
    </div>
  );
};

export default SearchBox;
