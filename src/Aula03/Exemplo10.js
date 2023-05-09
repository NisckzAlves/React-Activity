import { useState } from 'react';
import { Link } from 'react-router-dom';

let initialShapes = [
  { id: 0, type: 'circle', x: 630, y: 150 },
  { id: 1, type: 'square', x: 730, y: 150 },
  { id: 2, type: 'circle', x: 830, y: 150 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <button className='botao-circle' onClick={handleClick}>
        Move circles down!
      </button>
      <div className='centralizar'>
      {shapes.map(shape => (
        <div 
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
      </div>
    </div>
    </div>
  );
}
