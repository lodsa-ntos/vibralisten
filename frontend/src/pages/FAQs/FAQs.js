import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./FAQs.css";

const FAQs = () => {
  return (
    <header className="faqs-header">
      <h1 className="faqs-title">FAQs</h1>
      <div className="container-faqs">
        <SearchBar />
      </div>
    </header>
  );
};

export default FAQs;