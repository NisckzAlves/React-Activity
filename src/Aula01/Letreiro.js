import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Letreiro() {
  const [texto, inserir] = useState('');

  useEffect(() => {
    const frase = 'Venha estudar na Fatec';
    let i = 0;
    const intervalo = setInterval(() => {
      inserir(frase.substring(0, i + 1));
      i++;
      if (i === frase.length) {
        clearInterval(intervalo);
      }
    }, 100);
    return () => clearInterval(intervalo);
  }, []);

  return    <div className='container'> <Link to="/" className='btn-voltar'>Voltar</Link><div class="div-test"><h1>{texto}</h1></div></div>;
}

export default Letreiro;
