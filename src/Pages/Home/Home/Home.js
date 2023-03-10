import React from 'react';
import Footer from '../../Footer/Footer';
import TopArticles from '../Articles/TopArticles';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import MiniDashboard from '../MiniDashboard/MiniDashboard';
import PopularCourses from '../PopularCourses/PopularCourses';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MiniDashboard></MiniDashboard>
      <Categories></Categories>
      <PopularCourses></PopularCourses>
      <TopArticles></TopArticles>
      <Footer></Footer>
    </div>
  );
};

export default Home;