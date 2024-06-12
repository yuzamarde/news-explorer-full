import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import PopupSignin from './PopupSignin';
import PopupSignupSuccess from './PopupSignupSuccess';
import { registerUser } from '../../utils/MyAuth';

const PopupSignup = ({ handleAuth, title }) => {
 const [signin, signinSet] = useState(false);
 const [signupSuccess, signupSuccessSet] = useState(false);
 const [formData, setFormData] = useState({
  email: '',
  password: '',
  pengguna: '',
 });
 const [formErrors, setFormErrors] = useState({
  email: '',
  password: '',
  pengguna: '',
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

  // Validasi pengguna
  if (name === 'pengguna') {
   let newFormErrors = { ...formErrors };
   if (!value) {
    newFormErrors.pengguna = 'Pengguna harus diisi.';
   } else {
    newFormErrors.pengguna = '';
   }
   setFormErrors(newFormErrors);
  }
 };

 const handleResetInput = () => {
  setFormData({
   email: '',
   password: '',
   pengguna: '',
  });
  setError('');
 };

 const handleRegister = async () => {
  const { email, password, pengguna } = formData;
  try {
    const response = await registerUser(email, password, pengguna);
    return handleChangePopup(response);
  } catch (error) {
    console.error('Error registering user:', error);
    setError(`Error registering user: ${error.message}`);
  }
}


 const handleChangePopup = (response) => {
  if(response) {
   signupSuccessSet(!signupSuccess);
  }
  return;
 }

 const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password || !formData.pengguna) {
   let newFormErrors = { ...formErrors };
   if (!formData.email) {
    newFormErrors.email = 'Email harus diisi.';
   }
   if (!formData.password) {
    newFormErrors.password = 'Password harus diisi.';
   }
   if (!formData.pengguna) {
    newFormErrors.pengguna = 'Pengguna harus diisi.';
   }
   setFormErrors(newFormErrors);
   return;
  }

  if (!formErrors.email && !formErrors.password && !formErrors.pengguna) {
   handleRegister();
   handleResetInput();
  }
 };

 const handleSigninClick = () => {
  signinSet(!signin);
 };

 return (
  <>
   {signupSuccess ? (
    <PopupSignupSuccess handleAuth={handleAuth} title='Registrasi Berhasil' />
   ) : signin ? (
    <PopupSignin handleAuth={handleAuth} title='Masuk' />
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
       <input className='popup__input' type='password' placeholder='Masukkan kata sandi' name='password' id='password' value={formData.password} onChange={handleInputChange} required />
      </div>
      {formErrors.password && <p className='popup-error'>{formErrors.password}</p>}
     </div>
     <div className='popup__group'>
      <div className='popup__wrapper'>
       <label className='popup__label' htmlFor='pengguna'>
        Nama Pengguna
       </label>
       <input className='popup__input' type='text' placeholder='Masukkan nama pengguna' id='pengguna' name='pengguna' value={formData.pengguna} onChange={handleInputChange} required />
      </div>
      {formErrors.pengguna && <p className='popup-error'>{formErrors.pengguna}</p>}
     </div>
     {error && <p className='popup-error'>{error}</p>}
     <button className={`popup__button ${formErrors.email || formErrors.password || formErrors.pengguna ? 'disabled' : ''}`} type='submit' disabled={formErrors.email || formErrors.password || formErrors.pengguna}>
      Daftar
     </button>
     <p className='popup__text'>
      atau{' '}
      <Link className='popup__text-link' onClick={handleSigninClick}>
       Masuk
      </Link>
     </p>
    </PopupWithForm>
   )}
  </>
 );
};

export default PopupSignup;
