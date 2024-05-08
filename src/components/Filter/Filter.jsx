import style from './filter.module.css';

const Filter = ({ handleFiter }) => {
  return (
    <div className={style.wrap_field}>
      <label htmlFor="filter" className={style.title}>
        Find contacts by name
      </label>
      <input
        className={style.field}
        type="text"
        name="filter"
        onChange={handleFiter}
      ></input>
    </div>
  );
};
export default Filter;
