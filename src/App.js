function App() {

return (

  <div className="App">
    <h1>Iniciar Sesión</h1>
    <div id="cuadro" >
      <form >
        <div >
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <input placeholder="Usuario"/>
        </div>
        <div>
        <span class="material-symbols-outlined">
          lock
        </span>
          <input type="password" placeholder="Contraseña"/>
          <button type="onclick">Ver</button>
        </div>
        <button type="submit" >Entrar</button>
      </form>
    </div>
    



  </div> 
  );
}
export default App;