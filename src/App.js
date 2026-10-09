import React, { useState } from 'react';
import './App.css';

function App() {
  const [formdata, setFormdata] = useState({
    nombre: '',
    clase: '',
    habilidad: '',
    juramento: 'si'
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
      habilidad: '',
      juramento: 'si'
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
              <h3 htmlFor="nombre" className="text-floor">
                Nombre:
              </h3>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formdata.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <h3 htmlFor="clase">Clase / Rol de Combate:</h3>
              <select className="btn-submit"
                id="clase"
                name="clase"
                value={formdata.clase}
                onChange={handleChange}
                required
                
              >
                <option value="" disabled>-- Selecciona tu clase --</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Mago">Mago</option>
                <option value="Paladín">Paladín</option>
                <option value="Cazador">Cazador</option>
                <option value="Bardo">Bardo</option>
                <option value="Picaro">Pícaro</option>
              </select>
            </div>

            <div className="form-group">
              <h3 htmlFor="habilidad" className="text-floor">
                Habilidad:
              </h3>
              <input
                type="text"
                name="habilidad"
                placeholder="Tus habilidades"
                value={formdata.habilidad}
                onChange={handleChange}
              />
            </div>

            <div className="text-floor">
              <label >¿Aceptas el código y juramento del Gremio?</label>
              <div>
                <label className="form-group">
                  <input
                    type="radio"
                    name="juramento"
                    value="si"
                    checked={formdata.juramento === 'si'}
                    onChange={handleChange}
                  />
                  <span>SI</span>
                </label>

                <label className="form-group">
                  <input
                    type="radio"
                    name="juramento"
                    value="no"
                    checked={formdata.juramento === 'no'}
                    onChange={handleChange}
                  />
                  <span>NO</span>
                </label>
              </div>
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

                  <div className="carnet-data-footer">
                    {aventurero.juramento === 'si' ? (
                      <span className="badge-accepted">Aventurero Aceptado</span>
                    ) : (
                      <span className="badge-rejected">Solicitud Rechazada</span>
                    )}
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
