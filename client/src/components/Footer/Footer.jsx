import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

function Footer() {

  return (
    <footer>
      <p>
        Made by Khushbu Mandal &copy; {new Date().getFullYear()} 
        <br />
        <a href="https://www.linkedin.com/in/khushbu-mandal-5a644b312/" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: '#0e76a8' , marginRight: '0.5rem'}} /> 
         LinkedIn
         </a> |
        <a href="https://github.com/KhushbuMandal" target="_blank" rel="noopener noreferrer"> 
        <FontAwesomeIcon icon={faGithub} size="lg" style={{color: '#333' , marginRight: '0.5rem'}}/>
        GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;