import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";

function Navigation() {

  let burgerNavbar = () => {
    let navb = document.getElementById("navbarCollapse");
    if (navb) {
      let bootCollapse = Collapse.getOrCreateInstance(navb);
      bootCollapse.toggle();
    }
  };

  let fermerNavbar = () => {
    let navb = document.getElementById("navbarCollapse");
    if (navb) {
      let bootCollapse = Collapse.getInstance(navb);
      if (bootCollapse) bootCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">JOHN DOE</a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={burgerNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={fermerNavbar}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={fermerNavbar}>SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={fermerNavbar}>PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={fermerNavbar}>CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link to="/mentions légales" className="nav-link" onClick={fermerNavbar}>MENTIONS LÉGALES</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;