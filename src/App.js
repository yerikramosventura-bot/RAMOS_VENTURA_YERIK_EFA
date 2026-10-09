import React, { useState } from 'react';
import './App.css';

function App() {
  const [formdata, setFormdata] = useState({
    nombre: '',
    clase: '',
    habilidad: ''
  });

  const [carnetdeaventurero, setCarnetdeaventurero] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCarnetdeaventurero((prevCarnetdeaventurero) => [
      ...prevCarnetdeaventurero,
      formdata
    ]);
    setFormdata({
      nombre: '',
      clase: '',
      habilidad: ''
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Bienvenido a tu postulacion como aventurero</h1>
        <p>FORMULARIO DE POSTULACION</p>
      </header>

      <main className="main-content">
        <img 
         src="https://i.redd.it/aingvzicawqd1.png" 
          alt="Emblema del Gremio" 
          className="hero-image"
        />


        <div className="form-container">
          <h2>Formulario de Postulación</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formdata.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="clase">Clase:</label>
              <input
                type="text"
                name="clase"
                placeholder="Tu clase como aventurero"
                value={formdata.clase}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="habilidad">Habilidad:</label>
              <input
                type="text"
                name="habilidad"
                placeholder="Tus habilidades"
                value={formdata.habilidad}
                onChange={handleChange}
              />
            </div>

            <button class="btn-submit" type="submit">
              Agregar Aventurero
            </button>
          </form>

            <div className="carnet-container">
              <h3>Carnet de Aventureros</h3>
              {carnetdeaventurero.map((aventurero, index) => (
                <div key={index}>
                  <p><strong>Nombre:</strong> {aventurero.nombre}</p>
                  <p><strong>Clase:</strong> {aventurero.clase}</p>
                  <p><strong>Habilidad:</strong> {aventurero.habilidad}</p>
                  <span className="badge">Aventurero aceptado</span>
                </div>
              ))}
            </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Gremio de GAIA | Proyecto EFA - Introducción al Diseño Web</p>
      </footer>
    </div>
  );
}

  export default App;
