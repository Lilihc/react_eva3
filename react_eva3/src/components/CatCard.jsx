import React, { useState } from 'react';
import './CatCard.css';

function CatCard({ gato, darPremio }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    darPremio();

    // quitar la clase después de la animación
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <div className={`cat-card ${clicked ? 'clicked' : ''}`}>
      <img src={gato.imagen} alt={gato.nombre} className="cat-image" />
      <h2>{gato.nombre}</h2>
      <p>{gato.descripcion}</p>
      <button onClick={handleClick}>
        🎁 Premios: {gato.premios}
      </button>
    </div>
  );
}

export default CatCard;

