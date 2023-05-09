import { useImmer } from 'use-immer';
import { Link } from 'react-router-dom';

export default function Form3() {
  const [person, updatePerson] = useImmer({
    name: 'Niki',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <div>
        <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'></div>
      <label className='div-test'>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label className='div-test'>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label className='div-test'>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label className='div-test'>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p className='div-test'>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <div className='div-test'>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
      </div>
      </div>
      </div>
  );
}
