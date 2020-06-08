import React from 'react';
import facebookSVG from '../assets/social/facebook-white.svg';
import twitterSVG from '../assets/social/twitter-white.svg';
import instagramSVG from '../assets/social/instagram-white.svg';

import appstoreSVG from '../assets/store/app-store.svg';
import playstoreSVG from '../assets/store/play-store.svg';
import windowstoreSVG from '../assets/store/windows-store.svg';

export default function Footer(){
    return (
      <div className="footer">
          <div className="footer-body">
            <p className="footer-menu">
              <a href="#">Home</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Collection Statement</a>
              <a href="#">Help</a>
              <a href="#">Manage Account</a>
            </p>
            <p>
                Copyright @ 2020 DEMO Streaming. All Rights Reserved.
            </p>
            <div className="footer-bottom">
              <div className="social-icons">
                <img src={facebookSVG} alt="facebook"/>
                <img src={twitterSVG} alt="twitter"/>
                <img src={instagramSVG} alt="instagram"/>
              </div>
              <div className="appstore">
                <img src={appstoreSVG} alt="store"/>
                <img src={playstoreSVG} alt="store"/>
                <img src={windowstoreSVG} alt="store"/>
              </div>
            </div>
          </div>
      </div>        
    )
}