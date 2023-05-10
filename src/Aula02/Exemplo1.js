import { people } from './data.js';
import { getImageUrl } from './utils.js';
import { Link } from 'react-router-dom';

export default function List() {
  const listItems = people.map(person =>
    <li className='decoration' key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
<div className="div-test">
    <article>
      <h1>Scientists</h1>
      {listItems}
    </article>
    </div>
    </div>
  );
}