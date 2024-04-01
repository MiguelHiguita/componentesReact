import userLogo from '../../../assets/img.jpg'
import {useState} from "react";

const Login = () => {
    const [getUsuario, setUsuario] = useState("");
    const [getContraseña, setContraseña] = useState("");
    const [getCorreo, setCorreo] = useState("");
    if(getUsuario==="miguel" & getContraseña==="1234" & getCorreo==="miguel@gmail.com"){
        alert("Usuario correcto")
    }
    return (
        <form className="login-form">
        <img src={userLogo} alt="Usuario" />
        <h2>Iniciar sesión</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text" 
            required 
            onChange={(e) => {
                setUsuario(e.target.value);
                }}
            />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="text" 
            required 
            onChange={(e) => {
                setContraseña(e.target.value);
                }}
            />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="text" 
            required 
            onChange={(e) => {
                setCorreo(e.target.value);
                }}
            />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
  );
}

export default Login