import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import PopupSignup from './PopupSignup';
import { loginUser } from '../../utils/MyAuth';
import PopupSigninSuccsess from './PopupSigninSuccess';

const PopupSignin = ({ handleAuth, title }) => {
 const [signup, signupSet] = useState(false);
 const [signinSuccess, signinSuccessSet] = useState(false);
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });
 const [formErrors, setFormErrors] = useState({
  email: '',
  password: '',
 });

 const [error, setError] = useState('');

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
   ...formData,
   [name]: value,
  });

  // Validasi email saat berubah
  if (name === 'email') {
   let newFormErrors = { ...formErrors };
   if (!value) {
    newFormErrors.email = 'Email harus diisi.';
   } else if (!/\S+@\S+\.\S+/.test(value)) {
    newFormErrors.email = 'Email tidak valid.';
   } else {
    newFormErrors.email = '';
   }
   setFormErrors(newFormErrors);
  }

  // Validasi password saat berubah
  if (name === 'password') {
   let newFormErrors = { ...formErrors };
   if (!value) {
    newFormErrors.password = 'Password harus diisi.';
   } else if (value.length < 8) {
    newFormErrors.password = 'Password harus memiliki minimal 8 karakter.';
   } else {
    newFormErrors.password = '';
   }
   setFormErrors(newFormErrors);
  }
 };

 const handleResetInput = () => {
  setFormData({
   email: '',
   password: '',
  });
  setError('');
 };

 const handleLoginUser = async () => {
  const { email, password } = formData;
  try {
   const response = await loginUser(email, password);
   return handleSigninSuccess(response);
  } catch (error) {
   console.error('Error registering user:', error);
   setError(`Error registering user: ${error.message}`);
  }
 };

 const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
   let newFormErrors = { ...formErrors };
   if (!formData.email) {
    newFormErrors.email = 'Email harus diisi.';
   }
   if (!formData.password) {
    newFormErrors.password = 'Password harus diisi.';
   }
   setFormErrors(newFormErrors);
   return;
  }

  if (!formErrors.email && !formErrors.password) {
   handleLoginUser();
   handleResetInput();
  }
 };

 const handleSignupClick = () => {
  signupSet(!signup);
 };

 const handleSigninSuccess = (response) => {
  if (response) {
   signinSuccessSet(!signinSuccess);
   localStorage.setItem('jwt', response.token);
   setTimeout(() => {
    signinSuccessSet(!signinSuccess);
    handleAuth();
   }, 2000);
  }
 };

 return (
  <>
   {signinSuccess ? (
    <PopupSigninSuccsess handleAuth={handleAuth} title='Login Berhasil' />
   ) : (
    <>
     {signup ? (
      <PopupSignup handleAuth={handleAuth} title='Daftar' />
     ) : (
      <PopupWithForm title={title} handleAuth={handleAuth} handleSubmit={handleFormSubmit}>
       <div className='popup__group'>
        <div className='popup__wrapper'>
         <label className='popup__label' htmlFor='email'>
          Email
         </label>
         <input className='popup__input' type='text' placeholder='Masukkan email' id='email' name='email' value={formData.email} onChange={handleInputChange} required />
        </div>
        {formErrors.email && <p className='popup-error'>{formErrors.email}</p>}
       </div>
       <div className='popup__group'>
        <div className='popup__wrapper'>
         <label className='popup__label' htmlFor='password'>
          Kata Sandi
         </label>
         <input className='popup__input' type='password' placeholder='Masukkan kata sandi' id='password' name='password' value={formData.password} onChange={handleInputChange} required />
        </div>
        {formErrors.password && <p className='popup-error'>{formErrors.password}</p>}
       </div>
       {error && <p className='popup-error'>{error}</p>}
       <button className={`popup__button ${formErrors.email || formErrors.password ? 'disabled' : ''}`} type='submit' disabled={formErrors.email || formErrors.password}>
        Masuk
       </button>
       <p className='popup__text'>
        atau{' '}
        <Link className='popup__text-link' onClick={handleSignupClick}>
         Daftar
        </Link>
       </p>
      </PopupWithForm>
     )}
    </>
   )}
  </>
 );
};

export default PopupSignin;
