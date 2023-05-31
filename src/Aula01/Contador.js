import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export default function Contador() {
  const [contagemMeninas, setContagemMeninas] = useState(0);
  const [contagemMeninos, setContagemMeninos] = useState(0);

  const usuarioMenina = {
    nome: "Menina",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/163/163811.png",
    tamanhoImagem: 60
  };

  const usuarioMenino = {
    nome: "Menino",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    tamanhoImagem: 60
  };

  function incrementarContagemMeninas() {
    setContagemMeninas(contagemMeninas + 1);
  }

  function decrementarContagemMeninas() {
    if (contagemMeninas > 0) {
      setContagemMeninas(contagemMeninas - 1);
    }
  }

  function incrementarContagemMeninos() {
    setContagemMeninos(contagemMeninos + 1);
  }

  function decrementarContagemMeninos() {
    if (contagemMeninos > 0) {
      setContagemMeninos(contagemMeninos - 1);
    }
  }

  function resetarContagem() {
    setContagemMeninas(0);
    setContagemMeninos(0);
  }

  return (
    <div className='container'>
      <Link to="/" className='btn-voltar'>Voltar</Link>
      <div className="div-test">
        <div className='total'>
          <p>Total de pessoas: {contagemMeninas + contagemMeninos}</p>
        </div>
        <div className='div-col'>
          <img
            className="avatar"
            src={usuarioMenina.imageUrl}
            alt={"Foto de " + usuarioMenina.nome}
            style={{ width: usuarioMenina.tamanhoImagem, height: usuarioMenina.tamanhoImagem }}
          />
          <p>{usuarioMenina.nome}</p>
          <div className='button'>
            <Button status='incremento' onClick={incrementarContagemMeninas} />
            <Button status='dec' onClick={decrementarContagemMeninas} />
          </div>
          <p className='texto'>Total de meninas: {contagemMeninas}</p>
        </div>

        <div className='div-col'>
          <img
            className="avatar"
            src={usuarioMenino.imageUrl}
            alt={"Foto de " + usuarioMenino.nome}
            style={{ width: usuarioMenino.tamanhoImagem, height: usuarioMenino.tamanhoImagem }}
          />
          <p>{usuarioMenino.nome}</p>
          <div className='button'>
            <Button status='incremento' onClick={incrementarContagemMeninos} />
            <Button status='dec' onClick={decrementarContagemMeninos} />
          </div>
          <p className='texto'>Total de meninos: {contagemMeninos}</p>
        </div>
      </div>
      <div className='reset'>
        <button onClick={resetarContagem} className='reset-button'>
          <span className='reset-text'>Resetar</span>
        </button>
      </div>
    </div>
  );
}
