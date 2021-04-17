import React from 'react';
import Reviews from '../../Dashboard/User/Reviews/Reviews';
import BusinessIntro from '../BusinessIntro/BusinessIntro';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';



const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <BusinessIntro></BusinessIntro>
      <Contact></Contact>
      <Reviews></Reviews>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
};

export default Home;