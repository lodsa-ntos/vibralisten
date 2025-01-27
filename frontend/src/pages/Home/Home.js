import React from "react";
import Header from "../../components/Header/Header";
import '../../assets/styles/global.css'
import './Home.css';

const Home = () => {
  return (
    <div className="body">

    {/* spacing before the header */}
    <div className="home-above-header-spacing"></div>
      <Header />
    {/* spacing below the header*/}
    <div className="home-below-header-spacing"></div>
    <h1>Convert YouTube videos to MP3 in seconds.</h1>
    <div className="home-below-content"></div>    
    <h2>Fast, simple and free. Just paste the link</h2>
    </div>
  );
};

export default Home;