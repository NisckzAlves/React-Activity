import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`${message} ${to}!`);
    }, 5000);
  }

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Nicole">Nicole</option>
          <option value="Carol">Carol</option>
        </select>
      </label>
      <div className='centralizar'>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      </div>
      <button className='botao' type="submit">Send</button>
    </form>
    </div>
    </div>
  );
}
