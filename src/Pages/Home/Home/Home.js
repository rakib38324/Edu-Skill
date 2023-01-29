import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import MiniDashboard from '../MiniDashboard/MiniDashboard';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MiniDashboard></MiniDashboard>
      <Categories></Categories>
      <Footer></Footer>
    </div>
  );
};

export default Home;