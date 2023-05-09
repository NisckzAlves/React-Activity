import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className="div-test">
      <h1>{date.toLocaleString()}</h1>
    </div>
    </div>
  );
};

export default DataTime;
