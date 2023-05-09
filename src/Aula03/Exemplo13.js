import { Link } from 'react-router-dom';
import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
        <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <button className='botao' onClick={handleClick}>
        Reverse
      </button>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </div>
      </div>
  );
}
