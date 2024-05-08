import style from './form.module.css';

const Form = ({ handleChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleChange(e.target.elements.name.value, e.target.elements.number.value);
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.wrap_field}>
        <label className={style.label} htmlFor="name">
          Name
        </label>
        <input
          className={style.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={style.wrap_field}>
        <label className={style.label} htmlFor="number">
          Number
        </label>
        <input
          className={style.field}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
};
export default Form;
