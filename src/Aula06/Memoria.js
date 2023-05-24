import React, { useState, useEffect } from 'react';
import './Memoria.css';
import { Link } from 'react-router-dom';

const imagensCartas = [
  'https://i.pinimg.com/736x/e2/2f/eb/e22feb18d52c5df2c381261a0a4de5a6.jpg',
  'https://i.pinimg.com/originals/d5/a0/7c/d5a07cfed24ef4a602cb973ee50cebef.jpg',
  'https://i.pinimg.com/474x/e4/93/30/e49330b9173c9acbf3f5f56b05761703.jpg',
  'https://i.pinimg.com/550x/f1/1f/f3/f11ff3fb24f3047637f4b5c44ebe84e0.jpg',
  'https://i.pinimg.com/originals/f2/d9/91/f2d991fce16a1345aaaafdd2636292af.jpg',
  'https://pm1.narvii.com/7742/a7cef9aa482eaf12aa2abd89be7796f50a3850b4r1-400-400v2_uhq.jpg',
  'https://i.pinimg.com/736x/43/d9/bb/43d9bbd16125ea9ac946d3e17511fa37.jpg',
  'https://i.pinimg.com/736x/8d/41/71/8d4171cb00fee0433ee54949318b2707.jpg',
  'https://i.pinimg.com/474x/b3/ca/81/b3ca81027fe5d9f90c1579a52e96cd30.jpg',
  'https://pm1.narvii.com/7843/a1a6582bfcdeba6457b8e1ca0d4b56412371cc72r1-703-671v2_hq.jpg'
];

const embaralharCartas = (cartas) => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

const Memoria = () => {
  const [cartas, setCartas] = useState([]);
  const [cartasViradas, setCartasViradas] = useState([]);
  const [cartasEncontradas, setCartasEncontradas] = useState([]);
  const [nivelJogo, setNivelJogo] = useState('facil');
  const [exibirTodasAsCartas, setExibirTodasAsCartas] = useState(false);

  useEffect(() => {
    const gerarCartas = () => {
      let numCartas = 8;
      if (nivelJogo === 'medio') {
        numCartas = 12;
      } else if (nivelJogo === 'dificil') {
        numCartas = 16;
      }

      const imagensSelecionadas = imagensCartas.slice(0, numCartas / 2);
      const imagensDuplicadas = [...imagensSelecionadas, ...imagensSelecionadas];
      const cartasEmbaralhadas = embaralharCartas(imagensDuplicadas);
      setCartas(cartasEmbaralhadas);
    };

    gerarCartas();
  }, [nivelJogo]);

  const lidarComCliqueCarta = (indice) => {
    if (cartasViradas.length === 2 || cartasEncontradas.includes(indice)) {
      return;
    }

    setCartasViradas((cartasViradasAntigas) => [...cartasViradasAntigas, indice]);

    if (cartasViradas.length === 1) {
      const [primeiraCarta] = cartasViradas;
      if (cartas[primeiraCarta] === cartas[indice]) {
        setCartasEncontradas((cartasEncontradasAntigas) => [...cartasEncontradasAntigas, primeiraCarta, indice]);
      }
      setTimeout(() => {
        setCartasViradas([]);
      }, 1000);
    }
  };

  const renderizarCartas = () => {
    return cartas.map((carta, indice) => {
      const estaVirada = cartasViradas.includes(indice);
      const estaEncontrada = cartasEncontradas.includes(indice);
      return (
        <div
          key={indice}
          className={`carta ${estaVirada ? 'virada' : ''} ${estaEncontrada ? 'encontrada' : ''}`}
          onClick={() => lidarComCliqueCarta(indice)}
        >
          {estaVirada || estaEncontrada ? (
            <img src={carta} alt="Carta" />
          ) : (
            <div className="imagem-verso"></div>
          )}
        </div>
      );
    });
  };

  const reiniciarJogo = () => {
    setCartasViradas([]);
    setCartasEncontradas([]);
    setExibirTodasAsCartas(false);
  };

  const selecionarNivel = (nivel) => {
    setNivelJogo(nivel);
    reiniciarJogo();
  };

  useEffect(() => {
    if (cartasEncontradas.length === cartas.length && cartas.length !== 0) {
      setExibirTodasAsCartas(true);
      setTimeout(() => {
        alert('Parabéns! Você venceu o jogo!');
        reiniciarJogo();
      }, 2000);
    }
  }, [cartasEncontradas, cartas.length]);

  useEffect(() => {
    if (exibirTodasAsCartas) {
      const timer = setTimeout(() => {
        setExibirTodasAsCartas(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [exibirTodasAsCartas]);

  return (
    <div className='corpo'>
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    </div>
    <div>
      <div className="tabuleiro">{renderizarCartas()}</div>
      <div className="niveis">
        <button onClick={() => selecionarNivel('facil')}>Fácil</button>
        <button onClick={() => selecionarNivel('medio')}>Médio</button>
        <button onClick={() => selecionarNivel('dificil')}>Difícil</button>
      </div>
    </div>
    </div>
  
  );
};

export default Memoria;
