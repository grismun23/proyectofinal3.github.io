import React from "react";
import "./style.css";

const Formu = ({ user, handleChange, handleSubmit, sucess, error }) => {
  const disabled = !(
    user.nombre &&
    user.telefono &&
    user.correo &&
    user.mensaje
  );
  return (
    <div>
    <div class="container">
        	<div class="row">
			<h1>Contactanos</h1>
	        </div>
            <div class="row">
			<h4>Queremos leer tu mensaje!</h4>
	</div>
        <form onSubmit={handleSubmit} Action="https://formspree.io/f/xyyvqpln" 
Method="POST">
        <div class="row input-container">
            <div class="col-xs-12">
              <div class="styled-input wide">
                <label htmlFor="nombre" required> </label>
                <input value={user.nombre} onChange={handleChange}type="text"name="nombre" placeholder="Ingrese su nombre"/>
              </div>
            </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input">
              <label htmlFor="telefono" required></label>
              <input value={user.telefono} onChange={handleChange} type="text" name="telefono" placeholder="Ingrese su telefono"/>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input" style={{float:"right"}}>
              <label htmlFor="correo" required></label>
              <input value={user.correo} onChange={handleChange} type="email"name="correo" placeholder="Ingrese su correo"/>
            </div>
          </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <label htmlFor="mensaje" required></label>
                  <textarea value={user.mensaje} onChange={handleChange} name="mensaje"placeholder="Ingrese su mensaje" />
                     <input class="btn-lrg submit-btn" disabled={disabled} type="submit" />
              </div>
            </div>
        </div>
        </form>
        </div>


      {sucess && <p>Mensaje enviado correctamente!</p>}
      {error && <p>Ocurrio un error al intentar enviar el mensaje!</p>}
    </div>

  );
};

export default Formu;
