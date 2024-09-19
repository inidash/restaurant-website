import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="aboutus">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className='flex-center '/>
        <p className="p__opensans">loremKLDJDJ dhkdadiy doalldj hbdhdkh dhdkd akhdkhdk ndkhdkhd dkdkd dkakjdjd djdkjdkjd dkjdkjd</p>
        <button type="button" className='custom__button'>Know More </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className=''/>
        <p className="p__opensans">loremKLDJDJ dhkdadiy doalldj hbdhdkh dhdkd akhdkhdk ndkhdkhd dkdkd dkakjdjd djdkjdkjd dkjdkjd</p>
        <button type="button" className='custom__button'>Know More </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
