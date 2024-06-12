import Icon from '../Icon';
import { useEffect } from 'react';

const PopupWithForm = ({ children, handleAuth, title, handleSubmit, type }) => {
 const handlePopupOverlay = (e) => {
  if (e.target.className === 'popup') {
   handleAuth();
  }
 };

 const handleEscapeKey = (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
   handleAuth();
  }
 };

 useEffect(() => {
  document.addEventListener('keydown', handleEscapeKey);

  return () => {
   document.removeEventListener('keydown', handleEscapeKey);
  };
 }, []);

 const getClassCloseIcon = () => {
  if (type === 'signupSuccess') {
   return 'popup__close-success';
  } else {
   return 'popup__close';
  }
 };

 return (
  <section className='overlay' onClick={handlePopupOverlay}>
   <div className='popup'>
    <div className='popup__inner'>
     <span className={getClassCloseIcon()} onClick={handleAuth}>
      <Icon icon='close' color='white' size='40px' />
     </span>
     <h3 className='popup__title'>{title}</h3>
     <form onSubmit={handleSubmit} className='popup__form'>
      {children}
     </form>
    </div>
   </div>
  </section>
 );
};

export default PopupWithForm;
