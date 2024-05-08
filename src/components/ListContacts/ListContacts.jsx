import style from './listContacts.module.css';

const ListContacts = ({ contacts, hendleDelete }) => {
  return (
    <ul>
      {contacts.map(elem => {
        return (
          <li className={style.list} key={elem.id}>
            <span>{elem.name}:</span>
            <span className={style.number}>{elem.number}</span>
            <button className={style.btn} onClick={() => hendleDelete(elem.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ListContacts;
