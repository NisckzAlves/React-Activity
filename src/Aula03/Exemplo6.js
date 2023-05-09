import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Nicole',
    lastName: 'Raimundo',
    email: 'nicole@gmail.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <label className='div-test'>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label className='div-test'>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label className='div-test'>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p className='div-test'>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
      </div>
      </div>
    </>
  );
}
