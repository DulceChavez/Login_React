import React, { useState } from "react";
import swal from "sweetalert";
function App() {
  const [usuario, setValUsua] = useState(false);
  const [contraseña, setValContra] = useState(false);
  const [error, setEnviarError] = useState("");
  const [tipo, setTipo] = useState("password");
  const validarUsuarios = (e)=>{
      let usuarioval =  e.target.value 
    if(usuarioval === 'Dulce'){
      setValUsua (true)
    }
    else{
      setValUsua(false)
    }
}  

  const validarContraseñas = (e) =>{
    let contraseña = e.target.value
    if(contraseña === "Dulce050603" ){
      setValContra(true)
    }
    else{
      setValContra(false)
    }
  }  

  const enviar =()=>{
    console.log("Enviar")
    if (usuario === true && contraseña === true ){
      swal({
        title: "Bienvenido",
        icon: "success"
      });
    } 
    else {
      setEnviarError("Usuario o Contraseña Incorrectos")
    }
  } 
  const tipoContra = () =>{
    if(tipo==="password"){
      setTipo("text")
    }
    if(tipo==="text"){
      setTipo("password")
    }

  }
return (

  <div className="App">
    <h1>Iniciar Sesión</h1>
    <div id="cuadro" >
        <div >
        <span className ="material-symbols-outlined">
          account_circle
        </span>
        <input placeholder="Usuario" onChange={(e) => validarUsuarios(e)}/>
        
        </div>
        <div>
        <span className="material-symbols-outlined">
          lock
        </span>
          <input type={tipo} placeholder="Contraseña" onChange={(e) => validarContraseñas(e)}/> 
          <button onClick={() => tipoContra()}>
            {
              (tipo === "password") ? "Ver" : "Ocultar"
            }
          </button>
        </div>
        {
          (error.length > 1) && (
            <p>{error}</p>
          )
        }
        <button type="onclick" onClick={() => enviar()}>Entrar</button> 
    </div>
  </div> 
  );
}
export default App;