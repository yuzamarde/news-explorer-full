import Icon from '../Icon';
import { useState } from 'react';

const SavedNews = ({ image, date, title, description, author, category, handleRemoveClick }) => {
 const [showTooltip, setShowTooltip] = useState(false);

 const handleMouseEnter = () => {
  setShowTooltip(true);
 };

 const handleMouseLeave = () => {
  setShowTooltip(false);
 };

 return (
  <section className='card'>
   <div className='card__inner'>
    <div className='card__tooltip'>
     <p>{category}</p>
    </div>
    <div className='card__wrapper-saved'>
     {showTooltip && (
      <div className='card__tooltip'>
       <p>
        Hapus dari daftar <br /> tersimpan
       </p>
      </div>
     )}
     <div className='card__icons' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleRemoveClick(title)}>
      <Icon icon='delete' color='#B6BCBF' size='24px' />
     </div>
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

export default SavedNews;
