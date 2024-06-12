import img from '../assets/images/about/im.jpg';
const About = () => {
 return (
  <section className='about'>
   <div className='about__image'>
    <img src={img} alt='foto profil' />
   </div>
   <div className='about__text'>
    <h3 className='about__heading'>Tentang Penulis</h3>
    <div className='about__paragraph'>
     <p>
      News .com
     </p>
     <p>
      belajar
     </p>
     <p>
      sdawd{' '}
      <a href=''>My Portofolio</a>
     </p>
    </div>
   </div>
  </section>
 );
};

export default About;
