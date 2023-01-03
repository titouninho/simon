import React from 'react';
import './404page.css'
import backgrounderror from './images/background-404-prise.png';
import backgrounderrorzoom from './images/background-404-zoom.png';


const ErrorPage = (props) => {
    return ( 
  <body>
  <section className='animation-error'>
    <div className="tailor404">
    <h1 className='title404'>Oops </h1>
    <p className='desc404'>Nous ne trouvons pas votre page</p>
  </div>
  <div>
    <img className="background-404-prise" src={backgrounderror} />
    <img className="background-404-zoom" src={backgrounderrorzoom} />
  </div>
  <a href="/#/">
  <button id="button2" to="/#/" type="button" class="btn btn-warning">Page d'accueil</button>
  </a>
  </section>
  </body>);
}
 
export default ErrorPage;