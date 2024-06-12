import LayoutNotFound from './LayoutNotFound';
import icon from '../../assets/images/notfound/not-found_v1.webp';

const CardNotFound = () => {
 return (
  <LayoutNotFound>
   <div class='notfound-card'>
    <img className='notfound-card__icon' src={icon} alt='icon not found' />
    <h2 className='notfound-card__title'>Tidak ada data yang ditemukan</h2>
    <h3 className='notfound-card__subtitle'>
     Maaf, tidak ada yang sesuai dengan <br /> kata pencarianmu.
    </h3>
   </div>
  </LayoutNotFound>
 );
};

export default CardNotFound;
