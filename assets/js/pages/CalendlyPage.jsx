import React from 'react';
import './calendlypage.css'
import backgroundcontact from './images/background-contact.png';
import illustrationcontact from './images/illustration-contact.png';
import planete from './images/planete-tailor.png';
import tete1 from './images/tete1.png';
import tete2 from './images/tete2.png';
import tete3 from './images/tete3.png';
import loupe from './images/loupe-contact.png';

const CalendlyPage = (props) => {
    return ( 
  <section>
    <div>
    <img className="illustration-contact" src={illustrationcontact} />
    <img className="background-contact" src={backgroundcontact} />
    <img className="planete-contact" src={planete} />
    <img className="tete1" src={tete1} />
    <img className="tete2" src={tete2} />
    <img className="tete3" src={tete3} />
    <img className="loupe" src={loupe} />
    </div>
    <div className='title'>
        <h8 className="titre">Contacter nous</h8>
    </div>
  <div className="formulaire">
        <form method='post' name='contact'>
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
                <label for="form">Formule</label>
                <select required name='pack' id='form'>
                    <option value="">Choisir le pack</option>
                    <option value="formule-standard">Standard</option>
                    <option value="formule-pro">Pro</option>
                </select>
            </div>
            <div>
                <label for="msg">Message</label>
                <textarea id="msg" required maxLength={500} name="message" placeholder="Votre message"></textarea>
            </div>
            <div class="button">
                <button id="button-submit" type="submit">Envoyer</button>
            </div>
        </form>
  </div>
  </section>);
}
 
export default CalendlyPage;