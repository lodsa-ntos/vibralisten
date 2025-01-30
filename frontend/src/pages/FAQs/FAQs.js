import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./FAQs.css";

const FAQs = () => {
  return (
    <section className="faqs-section">
       
      <header className="faqs-header">
        <h1 className="faqs-title">FAQs</h1>
        <SearchBar />
      </header>
       
    </section>
  );
};

export default FAQs;