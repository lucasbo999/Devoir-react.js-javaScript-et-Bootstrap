import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 row">
      <div className="col-9 row mx-auto"> 
        <div className="col-11 col-md">
          <h2>john doe</h2>
          <ul className="listeStyle">
            <li className=""><a href="https://maps.app.goo.gl/RJTB6eCuQaeCg7LU7" className="decoration">40 rue Laure Diebold</a></li>
            <li><a href="https://maps.app.goo.gl/RJTB6eCuQaeCg7LU7" className="decoration">69009 Lyon, France</a></li>
            <li><a href="tel:10 20 30 40 50" className="decoration">10 20 30 40 50</a></li>
            <li><a href="mailto:john.doe@gmail.com" className="decoration">john.doe@gmail.com</a>   </li>
          </ul>
        </div>
        <div className="col-11 col-md">
          <h2>Liens utiles</h2>
          <ul className="listeStyle">
            <li><Link to="/" className="nav-link">Accueil</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link to="/contact" className="nav-link">Me contacter</Link></li>
            <li><Link to="/mentions légales" className="nav-link">Mentions légales</Link></li>
          </ul>
        </div>
        <div className="col-11 col-md">
          <h2>Mes dernières réalisation</h2>
          <ul className="listeStyle">
            <li><a href="" className="decoration">FreshFood</a></li>
            <li><a href="" className="decoration">Restaurant Akira</a></li>
            <li><a href="" className="decoration">Espace bien-être</a></li>
            <li><a href="" className="decoration">SEO</a></li>
            <li><a href="" className="decoration">Création d'une API</a></li>
            <li><a href="" className="decoration">Maquettes d'un site</a></li>
          </ul> 
        </div>  
      </div>
      
    </footer>
  );
}

export default Footer;