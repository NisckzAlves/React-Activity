import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
    <div className='div-test'>
      <h2>Raimundo, Nicole</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Estou utilizando react para criar esta pagina.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat mattis imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quis diam risus. Cras vulputate malesuada dictum. Maecenas maximus mi at aliquam volutpat. Morbi in fermentum lectus, in sodales erat. Curabitur quis quam consequat purus suscipit malesuada. Curabitur aliquet leo non mollis auctor.
      </Panel>
      </div>
      </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className='botao' onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}