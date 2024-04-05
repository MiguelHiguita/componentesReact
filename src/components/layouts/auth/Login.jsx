import userLogo from '../../../assets/img.jpg'
import {useState} from "react";
import {usuarios} from "../../database/dataBase"
import Swal from 'sweetalert2';



const Login = () => {
    const [getUsuario, setUsuario] = useState("");
    const [getContraseña, setContraseña] = useState("");
    const [getCorreo, setCorreo] = useState("");
    
    const buscarUsuario = () => {
      let estado = usuarios.some((usuario)=>{
      if(getUsuario === usuario.usuario && getContraseña === usuario.contrasena && getCorreo === usuario.correo){
        return true
      }
      })
      return estado
    }

    const iniciarSesion = () =>{
      if(buscarUsuario()){
        Swal.fire({
          title: "Acceso correcto",
          text: "Bienvenido",
          icon: "success"
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Acceso incorrecto",
          footer: '<a href="#">¿Por que tengo este problema?</a>'
        });
      }
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
          <input type="password" 
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
        <button onClick={iniciarSesion} type="button">Iniciar sesión</button>
      </form>
  );
}

export default Login