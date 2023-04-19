import kenia from './assets/img/kenia.png'
function Header() {
return (
  <div className="App">
    <div id="recuadro">
      <div id='foto'>
      <img id='kenia' src={kenia} alt='Kenia Os'></img>
        <h1>
          Kenia Os
        </h1>
      </div>  
  <input></input>
    <button>Buscar</button>
    </div>
  </div> 
  );
}
export default Header;