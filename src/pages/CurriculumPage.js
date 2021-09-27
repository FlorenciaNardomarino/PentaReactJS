import React from "react";
import '../styles/components/pages/CurriculumPage.css'


const CurriculumPage = () => {
  return (
    <>
      <main>
        <div className="titulos">
          <h2>Trabajá con nosotros</h2>
          <h4>Completá el formulario y cargá tu CV.</h4>
        </div>
        <form className="formulariocv">
          <input
            type="text"
            className="nombreyapellido"
            placeholder="*Nombre y Apellido"
            required
          />
          <input type="email" className="mail" placeholder="*Email" required />
          <input
            type="number"
            className="telefono"
            placeholder="*Teléfono"
            required
          />
          <select name="localidad" required>
            <option>Localidad de interés</option>
            <option>CABA</option>
            <option>GBA</option>
            <option>Buenos Aires</option>
            <option>Rosario</option>
            <option>Cordoba</option>
          </select>
          <input type="file" className="cargaarchivo" required />
          <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );
};

export default CurriculumPage;
