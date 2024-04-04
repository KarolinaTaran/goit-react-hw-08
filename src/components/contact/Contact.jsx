import css from "./Contact.module.css";

import { IoPersonSharp } from "react-icons/io5";
import { BsTelephonePlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.contactBox}>
      <div>
        <p className={css.text}>
          <IoPersonSharp className={css.icon} />
          {contact.name}
        </p>
        <p className={css.text}>
          <BsTelephonePlusFill className={css.icon} />
          {contact.number}
        </p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
