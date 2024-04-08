import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import { TextField } from "@mui/material";

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
      <TextField
        sx={{
          width: 400,
          marginBottom: "15px",
        }}
        fullWidth
        InputLabelProps={{
          style: { color: "#FB9AD1" },
        }}
        InputProps={{
          style: { color: "#FFFFFF" },
        }}
        type="text"
        label="Type contact's name..."
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
