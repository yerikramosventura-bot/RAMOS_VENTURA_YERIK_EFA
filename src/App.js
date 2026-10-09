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
      <header className="header">
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
              <label htmlFor="nombre">Nombre:</label>
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

            <button className="btn-submit" type="submit">
              Agregar Aventurero
            </button>
          </form>

          {carnetdeaventurero.length > 0 && (
            <div className="carnet-list">
              {carnetdeaventurero.map((aventurero, index) => (
                <div className="carnet-card" key={`${aventurero.nombre}-${index}`}>
                  <h3 className="carnet-title">CARNET DE IDENTIDAD COMO AVENTURERO</h3>

                  <div className="carnet-content">
                    <img
                      src="https://i.redd.it/aingvzicawqd1.png"
                      alt="Sello del Aventurero"
                      className="carnet-avatar"
                    />

                    <div className="carnet-info">
                      <p><strong>Nombre:</strong> <span>{aventurero.nombre}</span></p>
                      <p><strong>Clase:</strong> <span>{aventurero.clase}</span></p>
                      <p><strong>Habilidad:</strong> <span>{aventurero.habilidad}</span></p>
                    </div>
                  </div>

                  <div className="carnet-footer">
                    <span className="badge">Aventurero aceptado</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Gremio de GAIA | Proyecto EFA - Introducción al Diseño Web</p>
      </footer>
    </div>
  );
}

  export default App;
