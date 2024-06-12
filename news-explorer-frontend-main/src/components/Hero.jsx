import SearchForm from './SearchForm';

const Hero = () => {
 return (
  <main className='hero'>
   <div className='hero__wrapper'>
    <h1 className='hero__title'>Apa kabar terkini?</h1>
    <p className='hero__subtitle'>
     Temukan berita terkini tentang berbagai topik dan simpan di akun <br /> pribadimu
    </p>
   </div>
   <SearchForm />
  </main>
 );
};

export default Hero;
