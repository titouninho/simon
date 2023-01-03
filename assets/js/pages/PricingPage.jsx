import React from 'react';
import './pricingpage.css'
import backgroundpricing from './images/background-pricing.png';
import pricing from './images/pricing.png';
import logo1pricing from './images/logo1-pricing.png';
import logo2pricing from './images/logo2-pricing.png';
import logovalidate from './images/logo-validate.png';
import rondtailor from './images/rond-tailor.png';
import backgroundrocketright from './images/background-tailor-rocket-right.png';
import backgroundrocketleft from './images/background-tailor-rocket-left.png';
import planetetailorright from './images/planete-tailor.png';
import planetetailorleft from './images/planete-tailor.png';


const PricingPage = (props) => {
    return ( 
  <body>
  <section>
    <div className="desciption-pricing">
    <h1 className='title-pricing'> Standard et Pro  </h1>
    <p className='desc-pricing'>Nous proposons <br/> deux formules</p>
  </div>
  <div className='pricing-page'>
  <img className="background-pricing" src={backgroundpricing} />
  <img className="pricing" src={pricing} />
  <img className="logo1-pricing" src={logo1pricing} />
  <img className="logo2-pricing" src={logo2pricing} />
  <img className="rond-tailor" src={rondtailor} />
  <img className="rond-tailor2" src={rondtailor} />
  <p className='stantard-title'>Stantard</p>
  <p className='stantard-prix'>500€</p>
  <p className='stantard-mensuelle'>/mois</p>
  <blockquote className='stantard-desc'>La formule standard répond aux besoins<br/> majeurs de toutes les entreprises.<br/> 
Elle permettra d’aider les collaborateurs<br/>  sur ses points au moment même<br/>  ou elle sera intégrer au sein de l’organisation</blockquote>
  <p className='pro-title'>Pro</p>
  <p className='pro-prix'>Avec devis</p>
  <blockquote className='pro-desc'>Personnalisation de la solution<br/> au besoin de l’entreprise,<br/> création de plugin pour ajouter<br/> des fonctionnalités.<br/>
Adaptation du saas en fonction des besoins 
</blockquote>
  <a href='#ancre-tableau'>
  <h2 className='offre-link'>Voir l'offre en détail</h2>
  <h3 className='offre-link2'>Voir l'offre en détail</h3>
  </a>
  <a href="/#/">
  <button id="button3" to="/#/" type="button" class="btn btn-light">Lancez-vous</button>
  <button id="button4" to="/#/" type="button" class="btn btn-warning">Lancez-vous</button>
  </a>
  <h4 className='title-table' id='ancre-tableau'>Récapitulatif des différents contenus inclus dans chacun des packs</h4>
  </div>
  <div className='tableau'>
    <table id='table' width="150%">
      <tr>
        <th>Features</th>
        <th>Standard</th>
        <th>Pro</th>
      </tr>
      <tr>
        <td>Aide au recrutement</td>
        <td><img className="logo-validate2" src={logovalidate} /></td>
        <td><img className="logo-validate" src={logovalidate} /></td>
      </tr>
      <tr>
        <td>Numérisation du On-Boarding</td>
        <td><img className="logo-validate2" src={logovalidate} /></td>
        <td><img className="logo-validate" src={logovalidate} /></td>
      </tr>
      <tr>
        <td>Aide au suivi du collaborateur</td>
        <td><img className="logo-validate2" src={logovalidate} /></td>
        <td><img className="logo-validate" src={logovalidate} /></td>
      </tr>
      <tr>
        <td>Gestion du Off-Boarding</td>
        <td><img className="logo-validate2" src={logovalidate} /></td>
        <td><img className="logo-validate" src={logovalidate} /></td>
      </tr>
      <tr>
      <td>Solution personnalisable Plug & Play</td>
      <td>-</td>
      <td><img className="logo-validate" src={logovalidate} /></td>
      </tr>
      <tr>
        <td>Prix</td>
        <td>500€ /mois <br/> /enployer</td>
        <td>Avec devis</td>
      </tr>
    </table>
    </div>
    <div className='footer'>
    <img className="background-rocket-right" src={backgroundrocketright} />
    <img className="background-rocket-left" src={backgroundrocketleft} />
            <img className="planete-tailor-right" src={planetetailorright} />
            <img className="planete-tailor-left" src={planetetailorleft} />
    </div>
  </section>
  </body>);
}
 
export default PricingPage;