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
    <h1>
      <span className="featured-title">Convert YouTube videos to MP3</span> in seconds.
    </h1>
    <div className="home-below-featured-title"></div>    
    <p className="subtitle">Fast, simple and free. Just paste the link.</p>
    </div>
  );
};

export default Home;