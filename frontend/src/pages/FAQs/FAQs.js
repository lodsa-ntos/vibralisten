import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FaqData from "./FaqData";
import "./FAQs.css";
import faqData from "./FaqData";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <header className="faqs-header">
      <h1 className="faqs-title">FAQs</h1>
      <div className="container-faqs">
        <SearchBar />
      </div>
    </header>

    <div className="max-w-2x1 mx-auto p-6">
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button className="flex justify-be">

            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQs;