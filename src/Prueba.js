import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
import Body from "./Body";
function Prueba() {
return (

  <div className="App">
    <Header/>
    <Nav></Nav>
    <Body></Body>
    <Article></Article>
    <Footer texto = {"Hola"}/>
  </div> 
  );
}
export default Prueba;