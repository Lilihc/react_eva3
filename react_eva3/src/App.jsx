import React, { useState } from 'react';
import './App.css';
import CatCard from './components/CatCard';

function App() {
  const [gatos, setGatos] = useState([
    {
      nombre: 'Nur',
      descripcion: 'Su nombre significa "Luz", tiene 3 añitos, le encanta jugar y salir de paseo.',
      imagen: 'https://i.imgur.com/spuFUg2.png',
      premios: 0,
    },
    {
      nombre: 'Tao',
      descripcion: 'Su nombre significa"camino o vía", tiene 1,5 añitos. Muy curioso, amoroso, le encantan las verduras.',
      imagen: 'https://i.imgur.com/hh3JQMx.png',
      premios: 0,
    },
    {
      nombre: 'Kai',
      descripcion: 'Su nombre significa "Guerrero, luchador", tiene 7 meses. Es valiente porque sobrevivió a las dificultades de vivir en la calle.',
      imagen: 'https://i.imgur.com/RSCafBf.png',
      premios: 0,
    },
  ]);

  // Sumar todos los premios
  const totalPremios = gatos.reduce((acum, gato) => acum + gato.premios, 0);

  const darPremioAGato = (index) => {
    const nuevosGatos = [...gatos];
    nuevosGatos[index].premios += 1;
    setGatos(nuevosGatos);
  };

  // Función para reiniciar los premios
  const resetPremios = () => {
    const confirmacion = window.confirm('¿Estás segura de que quieres reiniciar todos los premios? 🐾');
    if (confirmacion) {
      const gatosReiniciados = gatos.map((g) => ({ ...g, premios: 0 }));
      setGatos(gatosReiniciados);
    }
  };
  

  return (
    <div className="App">
      <h1>🐾 Mis Gatos</h1>
      <p className="descripcion">
        Te presento a mis tres adorables gatos: cada uno con su propia y única personalidad. ¡Conócelos y enamórate de ellos! 💖
      </p>

      {/*  Mostrar el total de premios */}
      <h3>Total de Premios: {totalPremios} 🎉</h3>

      {/* Botón para reiniciar */}
      <button className="reset-btn" onClick={resetPremios}>🔄 Reiniciar Premios</button>

      <div className="contenedor-gatos">
        {gatos.map((gato, index) => (
          <CatCard key={index} gato={gato} darPremio={() => darPremioAGato(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
