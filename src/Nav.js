import k23 from './assets/img/k23.jpg'
import cdl from './assets/img/cdl.jpg'
import sheglam from './assets/img/sheglam.png'
import setlabiales1 from './assets/img/setLabiales.png'
import setlabiales2 from './assets/img/setLabiales2.png'
import keniaOs from './assets/img/keniaOs.png'
import nini from './assets/img/nini.png'
import kos from './assets/img/kos.png'
import hoodieCPME from './assets/img/hoodieCPME.png'
import hoodieCDL from './assets/img/hoodieCDL.png'
import hoodieK23 from './assets/img/hoodieK23.png'
import cpmeP from './assets/img/cpmiP.png'
import cdlP from './assets/img/cdlP.png'
import k23P from './assets/img/k23P.png'
import { useState } from 'react'
function Nav() {
  const [select, setSelect] = useState("")
  const [productos, setProductos] = useState([])
  const maquillaje = 
    [{
      "imagen": sheglam,
      "titulo": "SHEGLAM X KENIA OS",
      "descripcion": "Colorete líquido & Iluminador $MXN220.00"
    },
    {
      "imagen": setlabiales1,
      "titulo": "SET DE GLOSS",
      "descripcion": "Set de Lip Gloss MAMI, CONFIDENCE, BONITA $MXN899.00"
    },
    {
      "imagen": setlabiales2,
      "titulo": "SET DE LABIALES",
      "descripcion": "Set de labiales mate NINI, KENIA OS, KOS $MNX899.00 "
    },
    {
      "imagen": nini,
      "titulo": "LABIAL NINI",
      "descripcion": "Labial matte de larga duración $MNX349.00"
    },
    {
      "imagen": keniaOs,
      "titulo": "LABIAL KENIA OS",
      "descripcion": "Labial matte de larga duración $MNX349.00"
    },
    {
      "imagen": kos,
      "titulo": "LABIAL KOS",
      "descripcion": "Labial matte de larga duración $MNX349.00"
    }
    ]
  const discos = 
    [{ 
      "imagen": cdl,
      "titulo": "CAMBIOS DE LUNA",
      "Descripcion": "https://open.spotify.com/album/0UaPZ3OfJgoTB5RKpZ0UY0?si=WU2LTblfTlioMVCSNksUcA"
    },
    {
      "imagen": k23,
      "titulo": "K23",
      "Descripcion": "https://open.spotify.com/album/2jN4nUsaEyeT4oefP5XhF6?si=6TdrjjVNRgW6FrOSV4UXYQ"
    }] 
    const ropa =[
    {
      "imagen": hoodieCPME,
      "titulo": "Hoodie CPME",
      "descripcion": "$MNX650.00"
    },
    {
      "imagen": hoodieCDL,
      "titulo": "Cambios de Luna Hoodie",
      "descripcion": "$MNX900.00"
    },
    {
      "imagen": hoodieK23,
      "titulo": "Hoodie K23",
      "descripcion": "$MNX900.00"
    },
    {
      "imagen": cpmeP,
      "titulo": "CPME T-Shirt Unisex",
      "descripcion": "$MNX399.00"
    },
    {
      "imagen": cdlP,
      "titulo": "Cambios de Luna Playera",
      "descripcion": "$MNX400.00"
    },
    {
      "imagen": k23P,
      "titulo": "K23 Playera Unisex",
      "descripcion": "$MNX450.00"
    }]
const valSelect =(e) =>{
  if((e.target.value)==="maquillaje"){
    setSelect(e.target.value)
    setProductos(maquillaje)
  }
  if((e.target.value)==="discos"){
    setSelect(e.target.value)
    setProductos(discos)
  }
  if((e.target.value)==="mercancia"){
    setSelect(e.target.value)
    setProductos([])
  }
  if((e.target.value)==="ropa"){
    setSelect(e.target.value)
    setProductos(ropa)
  }
}   
return (

  <div className="App">
    <div id="navegador">
      <select id="select" defaultValue={''} onClick= {(e) => valSelect(e)}>
        <option value="mercancia">Mercancia</option>
        <option value="maquillaje">Maquillaje</option>
        <option value="discos" >Discos</option>
        <option value="ropa" >Ropa</option>
      </select>
      <span>Canciones</span>
      <span>Información</span>
      <span>Escuchar</span>
      <span>Contacto</span>
    </div>
    <div className='contenido'>
      {
        productos.map(e =>(
            <span key={e.imagen} className='productos'>
            <h2 id='titulo'>{e.titulo}</h2>
            <p id='descripcion'>{e.descripcion}</p>
            <img id='imagen' src={e.imagen} alt='canciones'></img>
          </span>
        ))
      }
    </div>
  </div> 
  );
}
export default Nav;