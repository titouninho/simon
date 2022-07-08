import React from 'react';
import './calendlypage.css'
import backgroundcontact from './images/background-contact.png';
import backgroundcontactforme from './images/background-contact-forme.png';
import illustrationcontact from './images/illustration-contact2.png';

const CalendlyPage = (props) => {
    return ( 
  <section>
    <div>
    <img className="illustration-contact" src={illustrationcontact} />
    <img className="background-contact" src={backgroundcontact} />
    <img className="background-contact-forme" src={backgroundcontactforme} />
    </div>
    <div className='title'>
        <h8 className="titre">Contacter nous</h8>
    </div>
  <div className="formulaire">
        <form method='post' name='contact' data-netlify="true" onSubmit="submit">
            <div>
            <input type="hidden" name="form-name" value="contact" />
                <label for="name">Nom</label> 
                <input type="text" required id="name" name="name" placeholder="Votre nom" />
                
            </div>
            <div>
                <label for="surname">Prénom</label> 
                <input type="text" required id="surname" name="surname" placeholder="Votre prénom"/>
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