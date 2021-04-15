import React from 'react';
import Reviews from '../../Dashboard/User/Reviews/Reviews';
import Header from '../Header/Header';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Header></Header>
          <Services></Services>
          <Reviews></Reviews>
        </div>
    );
};

export default Home;