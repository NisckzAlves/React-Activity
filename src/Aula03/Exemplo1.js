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
      <Button className="botao" onClick={onPlayMovie}>Play Movie</Button>
      <Button className="botao" onClick={onUploadImage}>Upload Image</Button>
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

