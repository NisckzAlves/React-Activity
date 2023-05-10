import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <h2>Faça seu check-in</h2>
      <label className='div-test'>
        Primeiro nome:{' '}
        <input 
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label className='div-test'>
        Ultimo nome:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p className='div-test'>
        Seu ticket vai ser para: <b>{fullName}</b>
      </p>
    </div>
    </div>
  );
}
