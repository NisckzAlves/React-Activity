import { Link } from 'react-router-dom';
import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];

export default function CounterList() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
    
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button className='botao-left' onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    
    </div>
    </div>
  );
}
