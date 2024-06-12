import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import PopupSignin from './PopupSignin';

const PopupSignupSuccess = ({ handleAuth, title }) => {
 const [signin, setSignin] = useState(false);

 const handleSigninClick = () => {
  setSignin(!signin);
 };

 return (
  <>
   {signin ? (
    <PopupSignin handleAuth={handleAuth} title='Masuk' />
   ) : (
    <PopupWithForm title={title} handleAuth={handleAuth} type='signupSuccess'>
     <Link className='popup__text-link' onClick={handleSigninClick}>
      Masuk
     </Link>
    </PopupWithForm>
   )}
  </>
 );
};

export default PopupSignupSuccess;
