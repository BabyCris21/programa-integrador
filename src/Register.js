// RegisterForm.js
import React from 'react';
import './Register.css'; // Importa el archivo CSS para los estilos del formulario de registro

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="register-form-container">
        <form className="register-form">
          <h2>Registrarse</h2>
          <div>
            <label htmlFor="newUsername">Nuevo Usuario:</label>
            <input type="text" id="newUsername" name="newUsername" />
          </div>
          <div>
            <label htmlFor="newPassword">Nueva Contraseña:</label>
            <input type="password" id="newPassword" name="newPassword" />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
