import { Link, useLocation, useNavigate } from 'react-router-dom';
import { linkData } from '../../utils/LinkData';
import { useEffect, useState } from 'react';
import PopupSignin from '../Popup/PopupSignin';
import { useUserContext } from '../../context/DataUserContext';
import { getCurrentUser } from '../../utils/MyAuth';
import Icon from '../Icon';

const Navigation = ({ classLink, classButton, classButtonName }) => {
 const { home, savedNews } = linkData;
 const location = useLocation();
 const { userData, updateUserProfile } = useUserContext();
 const token = localStorage.getItem('jwt');
 const { popupOpen, setPopupOpen } = useUserContext();
 const { loggedIn, setLoggedIn } = useUserContext();
 const navigate = useNavigate();

 useEffect(() => {
  if (token) {
   setLoggedIn(!loggedIn);
   handleUserProfle(token);
  }
 }, [token]);

 const handleUserProfle = async (token) => {
  try {
   const response = await getCurrentUser(token);
   updateUserProfile(response);
  } catch (error) {
   console.error('Error checking token validity:', error);
  }
 };

 const isActive = (path) => {
  return location.pathname === path ? 'active' : '';
 };

 const handleAuth = () => {
  if (token) {
   localStorage.removeItem('jwt');
   setLoggedIn(!loggedIn);
   navigate(home);
   return;
  }
  setPopupOpen(!popupOpen);
 };

 return (
  <>
   <Link to={home} className={`${classLink} ${isActive(home)}`}>
    Beranda
   </Link>
   {token && (
    <Link to={savedNews} className={`${classLink} ${isActive(savedNews)}`}>
     Artikel Tersimpan
    </Link>
   )}
   <button type='button' className={classButton} onClick={handleAuth}>
    {token ? (
     <>
      <div className={classButtonName}>
       <span>{userData.name}</span>
       <Icon icon='logout' size='24px' />
      </div>
     </>
    ) : (
     'Masuk'
    )}
   </button>
   {popupOpen && <PopupSignin handleAuth={handleAuth} title='Masuk' />}
  </>
 );
};

export default Navigation;
