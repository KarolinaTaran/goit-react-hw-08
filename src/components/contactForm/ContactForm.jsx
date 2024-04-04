import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactForm = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const INITIAL_FORM_DATA = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(30, "User name must be less than 30 characters!")
      .required("Name is required")
      .test("uniqueName", "Name already exists", (value) => {
        return !contacts.some((contact) => contact.name === value);
      }),
    number: Yup.string()
      .min(3, "Phonenumber must be at least 3 characters!")
      .required("Number is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form className={css.formWrapper} onSubmit={handleSubmit}>
            <p className={css.title}>Name</p>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="John Smith"
            />
            <ErrorMessage name="name" component="span" />
            <p className={css.title}>Number</p>
            <Field
              className={css.field}
              type="text"
              name="number"
              placeholder="123-00-19"
            />
            <ErrorMessage name="number" component="span" />
            <button
              type="submit"
              disabled={isSubmitting}
              title="Click to save new phonenumber"
              aria-label="Add new phonenumber"
            >
              Add contact
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
