import React, { useState } from "react";
import swal from "sweetalert";
function App() {
  const [Usuario, ValUsua] = useState(false);
  const [Contraseña, ValContra] = useState(false);
  const [Error, enviarError] = useState("");
  //const [Tipo, TipoContraseña] = useState();
  const usuarios = (e)=>{
      let usuario =  e.target.value 
    if(usuario === 'Dulce'){
      ValUsua (true)
  }
  else{
    ValUsua(false)
  }
}  
const contraseñas = (e) =>{
  let contraseña = e.target.value
  if(contraseña === "Dulce050603" ){
    ValContra(true)
  }
  else{
    ValContra(false)
  }
}  
  const enviar =()=>{
    console.log("Enviar")
    if (Usuario === true && Contraseña === true ){
      swal({
        title: "Bienvenido",
        icon: "success"
      });
    } 
    else {
      enviarError("Usuario o Contraseña Incorrectos")
    }
  } 
  /*const tipo = () =>{
  }*/
return (

  <div className="App">
    <h1>Iniciar Sesión</h1>
    <div id="cuadro" >
        <div >
        <span className ="material-symbols-outlined">
          account_circle
        </span>
        <input placeholder="Usuario" onChange={(e) => usuarios(e)}/>
        
        </div>
        <div>
        <span className="material-symbols-outlined">
          lock
        </span>
          <input type="password " placeholder="Contraseña" onChange={(e) => contraseñas(e)}/> 
          <button type="onclick" >Ver</button>
        </div>
        {
          (Error.length > 1) && (
            <p>{Error}</p>
          )
        }
        <button type="onclick" onClick={() => enviar()}>Entrar</button> 
    </div>
  </div> 
  );
}
export default App;