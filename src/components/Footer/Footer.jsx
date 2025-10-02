import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import insta_icon from '../../assets/instagram_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'> 
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={insta_icon} alt="Instagram" />
        <img src={twitter_icon} alt="Twitter" />
      </div>

      <ul className="footer-links">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className='copyright'>
        &copy; 2025 Yogesh Thakur. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
