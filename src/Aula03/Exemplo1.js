import { Link } from 'react-router-dom';

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function ToolBar({ onPlayMovie, onUploadImage }) {
  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
<div className="div-test">
      <button className="botao-grande" onClick={onPlayMovie}>Play Movie</button>
      <button className="botao-grande" onClick={onUploadImage}>Upload Image</button>
    </div>
    </div>
  );
}


export default function Exemplo1() {
  return (
    <div>
      <ToolBar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
    </div>
  );
}

