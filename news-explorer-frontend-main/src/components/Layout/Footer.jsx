import React from 'react';
import { Link } from 'react-router-dom';
import { linkData } from '../../utils/LinkData';
import Icon from '../Icon';

const Footer = () => {
 const { home } = linkData;
 return (
  <footer className='footer'>
   <p className='footer__copyright'>
    © 2024 News API & Made  by <a href=''>Yuza</a>
   </p>
   <div className='footer__wrapper'>
    <div className='footer__links'>
     <Link to={home}>Beranda</Link>
     <a href='https://tripleten.com/'>Triple Ten</a>
    </div>
    <div className='footer__icons'>
     <a href='https://github.com/yuzamarde'>
      <Icon icon='github' color='black' size='24px' />
     </a>
     <a href='https://www.linkedin.com/in/riyanmardeyuza/'>
      <Icon icon='linkedin' color='black' size='24px' />
     </a>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
