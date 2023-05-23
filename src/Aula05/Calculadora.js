import React, { useState } from "react";
import "./Calculator.css";
import { Link } from 'react-router-dom';

function Calculadora() {
  const [valorDisplay, setValorDisplay] = useState("");
  const [operacao, setOperacao] = useState("");
  const [limparDisplay, setLimparDisplay] = useState(true);

  const adicionarDigito = (digito) => {
    setValorDisplay((prevValor) => (prevValor === "0" || limparDisplay ? digito : prevValor + digito));
    setLimparDisplay(false);
  };

  const limparTudo = () => {
    setValorDisplay("");
    setOperacao("");
    setLimparDisplay(true);
  };

  const limparUltimaEntrada = () => {
    setValorDisplay((prevValor) => prevValor.slice(0, -1));
  };

  const adicionarOperacao = (op) => {
    if (op === "%") {
      calcularPorcentagem();
    } else {
      setOperacao(op);
      setValorDisplay((prevValor) => prevValor + " " + op + " ");
      setLimparDisplay(false);
    }
  };

  const calcularPorcentagem = () => {
    try {
      const valor = parseFloat(valorDisplay);
      const resultado = valor / 100;
      setValorDisplay(resultado.toString());
    } catch (error) {
      console.error("Erro de cálculo:", error);
      setValorDisplay("Erro");
    }
    setOperacao("");
    setLimparDisplay(true);
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(valorDisplay);
      setValorDisplay(resultado.toString());
    } catch (error) {
      console.error("Erro de cálculo:", error);
      setValorDisplay("Erro");
    }
    setOperacao("");
    setLimparDisplay(true);
  };

  const alterarSinal = () => {
    setValorDisplay((prevValor) => {
      const ultimoEspaco = prevValor.lastIndexOf(" ");
      const ultimoValor = prevValor.slice(ultimoEspaco + 1);
      const novoUltimoValor = parseFloat(ultimoValor) * -1;
      const novoValor = prevValor.slice(0, ultimoEspaco + 1) + novoUltimoValor.toString();
      return novoValor;
    });
  };
  
  

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
    <div className='centralizar'>
    <div className="calculadora">
      <div className="display">{valorDisplay || "0"}</div>
      <div className="linha">
        <button className={limparDisplay ? "botao-funcao" : "botao-funcao limpar"} onClick={limparDisplay ? limparTudo : limparUltimaEntrada}>
          {limparDisplay ? "AC" : "C"}
        </button>
        <button className="botao-funcao" onClick={alterarSinal}>
          ±
        </button>
        <button className="botao-funcao" onClick={() => adicionarOperacao("%")}>
          %
        </button>
        <button className="botao-operacao" onClick={() => adicionarOperacao("/")}>
          ÷
        </button>
      </div>
      <div className="linha">
        <button className="botao-numero" onClick={() => adicionarDigito("7")}>
          7
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito("8")}>
          8
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito("9")}>
          9
        </button>
        <button className="botao-operacao" onClick={() => adicionarOperacao("*")}>
          ×
        </button>
      </div>
      <div className="linha">
        <button className="botao-numero" onClick={() => adicionarDigito("4")}>
          4
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito("5")}>
          5
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito("6")}>
          6
        </button>
        <button className="botao-operacao" onClick={() => adicionarOperacao("-")}>
          −
        </button>
      </div>
      <div className="linha">
        <button className="botao-numero" onClick={() => adicionarDigito("1")}>
          1
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito("2")}>
          2
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito("3")}>
          3
        </button>
        <button className="botao-operacao" onClick={() => adicionarOperacao("+")}>
          +
        </button>
      </div>
      <div className="linha">
        <button className="botao-numero-zero" onClick={() => adicionarDigito("0")}>
          0
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito(".")}>
          .
        </button>
        <button className="botao-igual" onClick={calcularResultado}>
          =
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Calculadora;
