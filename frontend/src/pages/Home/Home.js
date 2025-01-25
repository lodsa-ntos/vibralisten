import React from "react";
import Header from "../../components/Header/Header";
import '../../assets/styles/global.css'

const Home = () => {
  return (
    <div className="body">

    {/* spacing before the header */}
    <div className="home-above-header-spacing"></div>
      <Header />
    {/* spacing below the header*/}
    <div className="home-below-header-spacing"></div>
      
        
    </div>
  );
};

export default Home;