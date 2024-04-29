// LoginForm.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importa el archivo CSS para los estilos del formulario de inicio de sesión

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form-container">
        <form className="login-form">
          <h2>Iniciar Sesión</h2>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Iniciar Sesión</button>
            <p className="forgot-password">
                <Link to="/Register">¿Olvidaste tu contraseña?</Link>
            </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
