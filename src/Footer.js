import instagram from './assets/img/instagram.png'
import facebook from './assets/img/facebook.png'
import youtube from './assets/img/youtube.png'
import twitter from './assets/img/twitter.png'
function Footer({texto}) {
  const redes = [
    {
      "imagen": instagram,
      "link": 'https://www.instagram.com/keniaos/'
    },
    {
      "imagen": facebook,
      "link": 'https://www.facebook.com/profile.php?id=100044391790912'
    },
    {
      "imagen": youtube,
      "link": 'https://www.youtube.com/channel/UCSEY-xdBrV-J1zpLg9-mr6w'
    },
    {
      "imagen": twitter,
      "link": 'https://twitter.com/keniaos'
    }]
return (

  <div className="App">
    <div className='footer'>
      {
        redes.map(e =>(
          <span key={e.imagen} >
        <a href={e.link} >
          <img className='icono' src={e.imagen} alt='redes'></img>
        </a>
          </span>
        ))
      }
    </div>
    <span>{texto}</span>
  </div> 
  );
}
export default Footer;