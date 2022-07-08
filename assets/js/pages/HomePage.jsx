import React from 'react';
import './homepage.css'
import img1 from './images/illustration-tailor-home.png'; //with import
import backgroundtailor from './images/backgroundtailor.png';
import backgroundtailorlueur from './images/backgroundtailor-lueur.png';

const HomePage = (props) => {
    return ( 
  <section>
  <div className="tailorld">
    <h1 class="titletailor">Tailor.</h1>
    <p class="accrochetailor">L'Humain au centre des organisations.</p>
    <blockquote class="desctailor">Tailor une solution SaaS entièrement personnalisable<br/> 
    permets aux organisations d'accompagner<br/> 
    leurs collaborateurs de leurs recrutements<br/> 
    jusqu'à leur départ.</blockquote>
    <img className="img1" src={img1} />
    <a href="/#/register">
    <button id="button1" to="/#/register" type="button" class="btn btn-warning">Lancez-vous !</button>
    </a>
  </div> 
  <div>
  <img className="backgroundtailor" src={backgroundtailor} />
  <img className="backgroundtailor-lueur" src={backgroundtailorlueur} />
  </div>
  </section>);
}
 
export default HomePage;