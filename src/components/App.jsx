import Form from './Form/Form';
import { useState, useEffect } from 'react';
import ListContacts from './ListContacts/ListContacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localdata = localStorage.getItem('contacts');
    return localdata ? JSON.parse(localdata) : [];
  });
  const [filter, setFilter] = useState('');

  const handleChange = (value, number) => {
    const obj = {
      name: value,
      id: nanoid(),
      number: number,
    };
    const dublicate = filterByName(value);
    if (dublicate.length > 0) {
      alert(`${value} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, obj]);
    }
  };

  const handleFiter = ({ target: { value } }) => {
    setFilter(value);
  };

  const filterByName = value => {
    return contacts.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  };

  const hendleDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContact = filterByName(filter);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
        width: 400,
        margin: 'auto',
      }}
    >
      <Section title="Phonebook">
        <Form handleChange={handleChange} />
      </Section>
      <Section title="Contacts">
        <Filter handleFiter={handleFiter} />
        <ListContacts contacts={filterContact} hendleDelete={hendleDelete} />
      </Section>
    </div>
  );
};
export default App;
