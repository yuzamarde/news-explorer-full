import { useEffect, useState } from 'react';
import Icon from '../Icon';
import { useUserContext } from '../../context/DataUserContext';

const NewsCard = ({ image, date, title, description, author, userLoggedIn, isSaved, toggleSave }) => {
 const [tooltipText, setTooltipText] = useState('');
 const { popupOpen, setPopupOpen } = useUserContext();

 const handleSaveClick = () => {
  if (!userLoggedIn) {
   setTooltipText('Sign in to save articles');
   setTimeout(() => {
    setTooltipText('');
   }, 2000);
   setPopupOpen(!popupOpen);
  } else {
   toggleSave();
   if (isSaved) {
    setTooltipText('Article unsaved');
   } else {
    setTooltipText('Article saved');
   }
   setTimeout(() => {
    setTooltipText('');
   }, 2000);
  }
 };

 useEffect(() => {
  // Truncate text (titik titik text ketika terlalu panjang)
  const cardDescriptions = document.querySelectorAll('.card-description');
  cardDescriptions.forEach((description) => {
   if (description.clientHeight < description.scrollHeight) {
    description.classList.add('truncate-text');
   }
  });
 }, []);

 return (
  <section className='card'>
   <div className='card__wrapper'>
    {tooltipText && (
     <div className='card__tooltip'>
      <p>{tooltipText}</p>
     </div>
    )}
    <div className='card__icons' onClick={handleSaveClick}>
     {isSaved ? <Icon icon='bookmark-fill' color='#2F71E5' size='24px' /> : <Icon icon='bookmark' color='#B6BCBF' size='24px' />}
    </div>
   </div>
   <img src={image} alt={title + ' image'} className='card__image' />
   <div className='card__body'>
    <div className='card__date'>{date}</div>
    <h2 className='card__title'>{title}</h2>
    <p className='card__description'>{description}</p>
    <div className='card__author'>{author}</div>
   </div>
  </section>
 );
};

export default NewsCard;
