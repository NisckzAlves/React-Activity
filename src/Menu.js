import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';



export function Menu(){
  return(
    <div className="container">
    <div className="row">
      <div className="offset icon-box">
        <h3 className="title">Aulas</h3>
        <div>
        <Link to="/datatime" className='links'>Atividade 1: Data e hora</Link>
          <Link to="/letreiro" className='links'>Atividade 2: Letreiro</Link>
          <Link to="/contador" className='links'>Atividade 3: Contador</Link>
        </div>
      </div>
      <div className="offset icon-box">
        <h3 className="title">Aula - 25/04</h3>
        <div>
        <Link to="/gallery2" className='links'>Exemplo 1: Gallery</Link>
          <Link to="/todolist" className='links'>Exemplo 2: Todolist</Link>
        </div>
      </div>
      <div className="offset icon-box">
        <h3 className="title">Aula - 02/05</h3>
        <div>
        <Link to="/toolbar" className='links'>Exemplo 1: Toolbar</Link>
          <Link to="/gallery" className='links'>Exemplo 2: Gallery</Link>
          <Link to="/count" className='links'>Exemplo 3: Count</Link>
          <Link to="/form" className='links'>Exemplo 4: Form</Link>
          <Link to="/movingDot" className='links'>Exemplo 5:  MovingDot</Link>
          <Link to="/form2" className='links'>Exemplo 6: Form2</Link>
          <Link to="/form3" className='links'>Exemplo 7: Form3 </Link>
          <Link to="/list" className='links'>Exemplo 8: List</Link>
          <Link to="/list2" className='links'>Exemplo 9:  List2</Link>
          <Link to="/shapeEditor" className='links'>Exemplo 10:  ShapeEditor</Link>
          <Link to="/counterList" className='links'>Exemplo 11:  CounterList</Link>
          <Link to="/list3" className='links'>Exemplo 12:  List3</Link>
          <Link to="/list4" className='links'>Exemplo 13:  List4</Link>
          <Link to="/bucketList" className='links'>Exemplo 14:  BucketList</Link>
        </div>
      </div>

      <div className="offset icon-box">
        <h3 className="title">Aula - 09/05</h3>
        <div>
        <Link to="/city" className='links'>Exemplo 1: City quiz</Link>
          <Link to="/ticket" className='links'>Exemplo 2: Form Ticket</Link>
          <Link to="/accordion" className='links'>Exemplo 3: Componente Accordion</Link>
          <Link to="/contact" className='links'>Exemplo 4: Contact list</Link>
        </div>
      </div>
    </div>
  </div>
  );
}