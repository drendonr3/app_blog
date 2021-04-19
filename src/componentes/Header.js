import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
          <h1>Hola Mundo</h1>
          <nav>
            <Link to="/google.com" >Inicio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/acercade">Acerca De</Link>
          </nav>
        </header>
     );
}
 
export default Header;