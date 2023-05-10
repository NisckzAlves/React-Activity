import { useReducer } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { Link } from 'react-router-dom';
import { initialState, messengerReducer } from './messengerReducer';


export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
<div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Gabrela', email: 'Gabrela@mail.com'},
  {id: 1, name: 'Luis', email: 'Luis@mail.com'},
  {id: 2, name: 'Carol', email: 'Carol@mail.com'},
];
