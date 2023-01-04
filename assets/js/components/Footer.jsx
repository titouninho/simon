import React, {useContext} from 'react';
import gmail from "./images/gmail.png";
import linkedin from "./images/linkedin.png";
import pelopsblack from "./images/pelops-black&white.png";
import './footer.css';
import './responsive-footer.css';

const Footer = ({history}) => {
    return ( <footer class="navbar navbar-expand-lg navbar-light">
      <div class="footer">
        <ul class="navbar-nav me-auto">
          <li className='politique'>
            <a class="nav-link active" href="#/politicy">politicy
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li className='copyright'>
            <a class="nav-link active" href="#/copyright">©&nbsp;2022&nbsp;Tailor
            <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item" className='li'>
            <a class="nav-link" href="#"><img className="gmail" src={gmail} /></a>
          </li>
          <li class="nav-item" className='li'>
            <a class="nav-link" href="#"><img className="linkedin" src={linkedin} /></a>
          </li>
          <li class="nav-item" className='li'>
            <a class="nav-link" href="#/pelops.io"><img className="pelops-black" src={pelopsblack} /></a>
          </li>
        </ul>
      </div>
  </footer> );
}
 
export default Footer;