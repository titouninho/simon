import React, {useContext} from 'react';
import authAPI from '../services/authAPI';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import AuthContext from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import logotailor from './images/Logopascontour-noir.png'; //with import
import './navbar.css'

const Navbar = ({history}) => {

    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    const handleLogout = () => {
      authAPI.logout();
      setIsAuthenticated(false);
      toast.info("Vous êtes Déconnecté 😄");
      history.push("/login");
    };

    return ( <nav
    class="navbar navbar-expand-lg navbar-light">
    <div id='navbar' className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
          <li>
          <NavLink className="navbar-brand" to="/">
            <img className="logotailor" src={logotailor} />
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" id="employe" to="/register">Employés</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" id="feedback" to="/register">FeedBack</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" id="edt" to="/register">EDT</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {!isAuthenticated &&( <><li className="nav-item"><NavLink to="/register" className="nav-link">Inscription</NavLink></li>
            <li className="nav-item">
                <NavLink to="/login" id="connexion" className="btn btn-dark">Connexion</NavLink>
            </li></>) || (<li className="nav-item">
              <button onClick={handleLogout} className="btn btn-outline-danger">
                Déconnexion
              </button>
            </li> )}
        </ul>
      </div>
    </div>
  </nav> );
}
 
export default Navbar;