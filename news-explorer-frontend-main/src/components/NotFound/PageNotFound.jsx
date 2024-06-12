import { Link } from 'react-router-dom';
import LayoutNotFound from './LayoutNotFound';
import { linkData } from '../../utils/LinkData';

const PageNotFound = () => {
 const { home } = linkData;
 return (
  <LayoutNotFound>
   <div class='notfound-404'>
    <h3 className='notfound-404__text'>Oops! Page not found</h3>
    <h1 className='notfound-404__title'>
     <span>4</span>
     <span>0</span>
     <span>4</span>
    </h1>
   </div>
   <h2 className='notfound-404__paragraph'>we are sorry, but the page you requested was not found</h2>
   <Link to={home} className='notfound-404__button'>
    Back to home
   </Link>
  </LayoutNotFound>
 );
};

export default PageNotFound;
