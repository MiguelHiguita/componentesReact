import Usuario from "./Usuario"
import Contraseña from "./Contraseña"
import Correo from "./Correo"
import userLogo from "./assets/img.jpg"


function App() {

  return (
  <div class="login-container">
      <form class="login-form">
        <img src={userLogo} alt="Usuario" />
        <h2>Iniciar sesión</h2>
        <Usuario/>
        <Contraseña/>
        <Correo/>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default App
