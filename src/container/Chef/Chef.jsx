import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt=" chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title='Chefs World' />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk </p>
        </div>
          <p className="p__opensans">lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk lorem kdiidsk lorem nfdsajhfgsh hwkfhjsfskjskjdjksdfjk</p>
      </div>
      <div className="app__chef-sign">
        <p>Kelvin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
