import { Link } from 'react-router-dom';
import { linkData } from '../../utils/LinkData';
import Navigation from './Navigation';
import Icon from '../Icon';
import { useEffect } from 'react';

const Topbar = ({ handleTopBar }) => {
 const { home } = linkData;

 const handleTopBarCheck = (e) => {
  if (e.target.className === 'overlay') {
   handleTopBar();
  }
  return;
 };

 const handleEscapeKey = (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
   handleTopBar();
  }
 };

 useEffect(() => {
  document.addEventListener('keydown', handleEscapeKey);

  return () => {
   document.removeEventListener('keydown', handleEscapeKey);
  };
 }, []);

 return (
  <div className='overlay' onClick={handleTopBarCheck}>
   <div className='topbar'>
    <div className='topbar-top'>
     <div className='topbar-top__wrapper'>
      <Link to={home} className='topbar-top__link'>
       News Explorer
      </Link>
      <span style={{ cursor: 'pointer' }} onClick={handleTopBar}>
       <Icon icon='close' color='white' size='24px' />
      </span>
     </div>
    </div>
    <div className='topbar-bottom'>
     <Navigation classLink='topbar-bottom__link' classButton='topbar-bottom__button' />
    </div>
   </div>
  </div>
 );
};

export default Topbar;
