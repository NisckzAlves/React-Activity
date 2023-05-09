import { useState } from 'react';
import { Link } from 'react-router-dom';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
  { id: 3, name: 'Louise Nevelson'},
  { id: 4, name: 'Louise Nevelson'},
  { id: 5, name: 'Louise Nevelson'},
  { id: 6, name: 'Louise Nevelson'},
  { id: 7, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <h1 className='div-test'>Inspiring sculptors:</h1>
      <ul className='div-test'>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button className='botao-delete' onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div></div>
  );
}
