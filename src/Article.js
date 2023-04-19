import malasDecisiones from './assets/img/malasDecisiones.png'
import llevatelo from './assets/img/llevatelo.png'
import mia from './assets/img/miaMia.png'
import roast from './assets/img/roast.png'
import mentiroso from './assets/img/mentiroso.png'
import bonita from './assets/img/bonita.png'
import fueLindo from './assets/img/fueLindo.png'
import terceraNoche from './assets/img/terceraNoche.png'
import delito from './assets/img/delito.png'  
function Article() {
  const canciones = 
  [{
    "imagen": malasDecisiones,
    "titulo" : "Malas Decisiones",
    "descripcion": 'https://open.spotify.com/track/6Xj014IHwbLVjiVT6H89on?si=144cf4fb05554fd0'
  },
  {
    "imagen": llevatelo,
    "titulo" : "Llevatelo",
    "descripcion": 'https://open.spotify.com/track/53RLjHptrKflawOuGru1xM?si=81ca1a94690b44a0'
  },
  {
    "imagen": mia,
    "titulo" : "Mia Mia",
    "descripcion": 'https://open.spotify.com/track/5frA4yUrm67JdmgrJOjJgg?si=cb12e607b11744b9'
  },
  {
    "imagen": roast,
    "titulo" : "Roast Yourself Kenia Os",
    "descripcion": 'https://open.spotify.com/track/3Z3cDIMrnPhIv0iCuhOqhY?si=b15ab1d75e9d4d63'
  },
  {
    "imagen": mentiroso,
    "titulo" : "Mentiroso",
    "descripcion": 'https://open.spotify.com/track/5iXCrcLT5iirF2UTmaa284?si=d72f27c3b1fb4c27'
  },
  {
    "imagen": bonita,
    "titulo" : "Bonita",
    "descripcion": 'https://open.spotify.com/track/1jBxLoNgHtZnY3ykT9MDyl?si=46e5f98352094033'
  },
  {
    "imagen": fueLindo,
    "titulo" : "Fue Lindo",
    "descripcion": 'https://open.spotify.com/track/7bMJX92st9uXhc4OuHDRG5?si=d22ef4ea647542b3'
  },
  {
    "imagen": terceraNoche,
    "titulo" : "Tercera Noche",
    "descripcion": 'https://open.spotify.com/track/0DPpsXoijB0H7OVsxx9Vqt?si=b5b6ab8ea4dd439e'
  },
  {
    "imagen": delito,
    "titulo" : "Delito",
    "descipcion": 'https://open.spotify.com/track/3bEezT99PBfz3BB9yEq4X8?si=93f5c00eadaf4b8c'
  }]
return (
  <div className="App">
    <div className='colUno'> 
    {
        canciones.map(e =>(
          <span key={e.imagen} >
            <p>{e.titulo}</p>
            <a href={e.descripcion}>
              <img src={e.imagen}  alt='canciones'></img>
            </a>
          </span>
        ))
      }
    </div> 
  </div> 
  );
}
export default Article;