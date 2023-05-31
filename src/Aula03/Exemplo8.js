import { useState } from 'react';
import { Link } from 'react-router-dom';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div>
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="botao" onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>     Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      </div>
      </div>
      </div>
  );
}
