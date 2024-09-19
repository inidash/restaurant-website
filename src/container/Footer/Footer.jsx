import React from 'react';
import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contacts">
        <h1 className="app__footer-headtext">Cobtact Us</h1>
        <p className="p__opensans">down side otada road, otukpo, Benue State</p>
        <p className="p__opensans">+234 987 9876 345</p>
        <p className="p__opensans">+234 980 4333 234</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer__logo" />
        <p className="p__opensans">"the best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="images__spoon" className='spoon__img' style={{marginTop:'15'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">8: 00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">7: 00 am - 11: 00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht, all rights reserved</p>
    </div>
  </div>
);

export default Footer;
