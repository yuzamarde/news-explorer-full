import { Link } from 'react-router-dom';
import { linkData } from '../../utils/LinkData';
import Topbar from './Topbar';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';

const Header = ({ type }) => {
 const { home } = linkData;
 const [showTopBar, setShowTopBar] = useState(false);
 const [scrollTop, setScrollTop] = useState(0);

 const headerConfig = {
  base: 'header',
  title: 'header__title header__title-home',
  link: 'header__link header__link-home',
  button: 'header__button header__button-home',
  buttonName: 'header__button-name',
  line: 'line line-home',
  additional: '',
 };

 if (type === 'saved') {
  headerConfig.additional = 'header__saved';
  headerConfig.title = 'header__title header__title-saved';
  headerConfig.link = 'header__link header__link-saved';
  headerConfig.button = 'header__button header__button-saved';
  headerConfig.buttonName = 'header__button-name';
  headerConfig.line = 'line line-saved';
 } else if (scrollTop >= 100) {
  headerConfig.additional = 'header__home header__scroll-active';
 } else {
  headerConfig.additional = 'header__home';
 }

 const handleScroll = () => {
  const newScrollTop = window.scrollY;
  setScrollTop(newScrollTop);
 };

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 const handleTopBar = () => {
  setShowTopBar(!showTopBar);
 };

 return (
  <header className={`${headerConfig.base} ${headerConfig.additional}`}>
   <Link to={home} className={headerConfig.title}>
    News Explorer
   </Link>
   <div className='header__wrapper'>
    <Navigation classLink={headerConfig.link} classButton={headerConfig.button} classButtonName={headerConfig.buttonName} />
   </div>
   <div className='header__checkbox'>
    <input className='checkbox' type='checkbox' name='checkbox' title='checkbox' onClick={handleTopBar} />
    <div className='hamburger-lines'>
     <span className={`${headerConfig.line} line1`}></span>
     <span className={`${headerConfig.line} line2`}></span>
     <span className={`${headerConfig.line} line3`}></span>
    </div>
   </div>
   {showTopBar && <Topbar handleTopBar={handleTopBar} />}
  </header>
 );
};

export default Header;
