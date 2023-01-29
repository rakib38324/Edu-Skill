import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';
import MiniDashboard from '../MiniDashboard/MiniDashboard';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MiniDashboard></MiniDashboard>
      <Categories></Categories>
    </div>
  );
};

export default Home;