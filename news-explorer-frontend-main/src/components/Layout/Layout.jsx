import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, type }) => {
 return (
  <>
   <Header type={type} />
   {children}
   <Footer />
  </>
 );
};

export default Layout;
