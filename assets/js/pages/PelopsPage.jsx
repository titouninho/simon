import React from 'react';
import './pelops.css'
import backgroundpelops from './images/background-pelops.png';
import etoile from './images/etoile-tailor.png';
import illustrationpelops from'./images/illustration-pelops.png';
import pelopsicon from './images/pelops-gris.png';
import logotailorpelops from'./images/logopascontour-noir.png';
import edarwinnoir from'./images/e-darwin-logo-noir.png';
import maxime from'./images/maxime.png';
import nahim from'./images/nahim.png';
import bordure from'./images/bordure-equipe.png';
import pelopsadresse from'./images/pelops-adresse.png';

const PelopsPage = (props) => {
    return ( 
  <section className='pelops-section'>
  <div className="pelopspage">
  <img className="background-pelops" src={backgroundpelops} />
  <img className="etoile3" src={etoile} />
  <img className="etoile4" src={etoile} />
  <img className="illustration-pelops" src={illustrationpelops} />
  <img className="pelops-icon" src={pelopsicon} />
  <h14 className='titre-pelops'>Pelops</h14>
  <p className='accroche-pelops'>Digital Agency</p>
  <blockquote className='desc-pelops'>Pelops est une entreprise digital proposant des outils <br/> 
  pour répondre à des besoins entrepreneuriale. <br/> 
  Nous développons des méthodes et des application <br/> 
  afin de mieux communiquer dans le monde professionnel. </blockquote>
  </div>
  <div className='pelops-propositions'>
      <h15 className='pelops-titre-propositions'>Développé par PELOPS</h15>
      <a href='/#/home'>
  <img className="logo-tailor-pelops" src={logotailorpelops} />
  </a>
  <a href='https://www.youtube.com/channel/UCUDXSeU8HL_ZsBTDiW8W5dw'>
  <img className="edarwin-logo" src={edarwinnoir} />
  </a>
  </div>
  <div className='equipe'>
    <h16 className='equipe-title'>Notre Equipe</h16>
  <img className="maxime-photo" src={maxime} />
  <img className="nahim-photo" src={nahim} />
  <img className="bordure-equipe" src={bordure} />
  <img className="bordure-equipe2" src={bordure} />
  <p className='titre-maxime'>Maxime <br/> ZANCHI</p>
  <p className='titre-nahim'>Nahim <br/> BENBAHLOULI</p>
  <p className='grade-maxime'>CEO</p>
  <p className='grade-nahim'>CTO</p>
  </div>
  <div className='info'>
    <a href='https://www.google.fr/maps/place/28+Rue+Pierre+Mauroy,+59800+Lille/@50.6364268,3.0645678,18.74z/data=!4m5!3m4!1s0x47c2d588f6161499:0x4d77472bb325bfcf!8m2!3d50.6365095!4d3.064945'>
  <img className="pelops-map" src={pelopsadresse} />
  </a>
  <p className='adresse-pelops'> <b>adresse :</b> 28 rue Pierre Mauroy Lille 59800</p>
  <p className='tel-pelops'> <b>tel :</b> 06 30 63 34 33</p>
  <p className='mail-pelops'> <b>mail :</b> pelops-agency@gmail.com</p>
    <h17 className='info-title'>Information</h17>
  <form method='post' className='contact-pelops'>
            <div>
                <label for="name">Nom</label> 
                <input type="text" required id="name" name="name" placeholder="Votre nom" />
            </div>
            <div>
                <label for="surname">Prénom</label> 
                <input type="text" required id="firstname" name="surname" placeholder="Votre prénom"/>
            </div>
            <div>
                <label for="mail">E-mail&nbsp;</label>
                <input type="email" required id="mail" name="mail" placeholder="Votre e-mail"/>
            </div>
            <div>
                <label for="msg">Message</label>
                <textarea id="msg" required maxLength={500} name="message" placeholder="Votre message"></textarea>
            </div>
            <div class="button-pelops">
                <button id="button-submit-pelops" type="submit">Envoyer</button>
            </div>
        </form>
  </div>
  <div className='footer-white'>
        <p className='title-footer-white'>It's a white footer to make a margin to add in the footer</p>
  </div>
  </section>);
}

 
export default PelopsPage;