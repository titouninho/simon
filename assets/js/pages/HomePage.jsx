import React from 'react';
import './homepage.css';
import './responsive.css';
import backgroundnuage from './images/background-home.png';
import nuage from './images/nuage-tailor.png';
import etoile from './images/etoile-tailor.png';
import illustrationhome from './images/illustration-homepage-tailor.png';
import illustrationhomecroquis from './images/illustration-homepage-croquis-tailor.png';
import pelops from './images/pelops.png';
import illustrationconstat from './images/illustration-constat.png';
import constatgraph from './images/constat-graph.png';
import constatligne from './images/constat-ligne.png';

const HomePage = (props) => {
    return ( 
      <body className='body'>
  <section className='back'>{}
  <div className="tailorld">
    <h1 class="titletailor">Tailor</h1>
    <p class="accrochetailor">L'Humain au centre des organisations.</p>
    <blockquote class="desctailor">Tailor une solution SaaS entièrement personnalisable<br/> 
    permets aux organisations d'accompagner<br/> 
    leurs collaborateurs de leurs recrutements<br/> 
    jusqu'à leur départ.</blockquote>
    <a href="/#/register">
    <button id="button1" to="/#/register" type="button" class="btn btn-warning">Lancez-vous !</button>
    <button id="buttonplay" to="/#/presentation" type="button" class="btn btn-warning">Lancez-vous !</button>
    </a>
    <div className='pelops-div'>
    <h10 className='powered'>Powered by</h10>
    <a href='/#/pelops.io'>
    <img className="pelops" src={pelops} />
    </a>
    </div>
  </div> 
  <div>
  <img className="background-nuage" src={backgroundnuage} />
  <img className="nuage" src={nuage} />
  <img className="etoile" src={etoile} />
  <img className="etoile2" src={etoile} />
  <img className='illustration-home' src={illustrationhome} />
  <img id='croquis-animation' className='illustration-home-croquis' src={illustrationhomecroquis} />
  </div>
  <div className='constat-page'>
    <h20 className='constat-title'>Constat</h20>
    <img className='illustration-constat' src={illustrationconstat} />
    <img className='constat-graph' src={constatgraph} />
    <img className='constat-ligne1' src={constatligne} />
    <img className='constat-ligne2' src={constatligne} />
    <div className='constat'>
    <blockquote className='constat1'>Les <strong>problèmes de recrutement</strong> interviennent dans la quasi totalité <br/>des entreprises françaises.
</blockquote>
<blockquote className='constat2'>Le <strong>suivi des collaborateurs</strong> est trop souvent négligé au profit de <br/>ses activités côté client.
</blockquote>
<blockquote className='constat3'>La <strong>gestion des ressources</strong> n’est très souvent pas optimisée.
</blockquote>
</div>
  </div>
  </section>
  </body>);
}

 
export default HomePage;