import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./FAQs.css";

const faqData = [
  {
    question: "What is VibraListen?",
    answer: "VibraListen is an online tool that lets you convert YouTube videos to MP3 quickly and easily.",
  },
  {
    question: "How does YouTube to MP3 converter work?",
    answer: `Basta seguir estes passos:

          1. Copia o link do vídeo do YouTube que desejas converter.
          2. Cola o link na barra de entrada do nosso site.
          3. Clica no botão "Converter" e aguarda a conversão.
          4. Faz o download do ficheiro MP3 quando estiver pronto.`
  },
  {
    question: "VibraListen is free?",
    answer: "Yes, the service is 100% free and requires no registration.",
  },
  {
    question: "Do I need to install any software to use it?",
    answer: "No, VibraListen works directly in the browser, without the need for downloads or installations.",
  },
  {
    question: "Are there time or size limits for conversion?",
    answer: `We currently support the conversion of videos up to 60 minutes long. Longer videos may take longer 
    to process and, in some cases, may not be converted due to technical limitations. We recommend converting 
    shorter videos to ensure faster and more efficient processing. We are continually working to optimise performance 
    and increase the supported limits.
    `,
  },
  {
    question: "Does the site support formats other than MP3?",
    answer: "At the moment, we only support MP3 conversions, but we plan to add more formats in the future.",
  },
  {
    question: "Why did the conversion fail?",
    answer: `Some possible reasons:

    - The YouTube link is incorrect or the video has been removed.
    - The video has privacy restrictions.
    - YouTube may have updated its structure, and our service needs an update.
    - There may be an overload of traffic on the site.
    `,
  },
  {
    question: "Are the converted files stored on the site?",
    answer: "No. After downloading, the files are automatically removed from our servers.",
  },
  {
    question: "Does VibraListen work on mobile devices?",
    answer: "Yes, our website is compatible with PCs, tablets and smartphones.",
  },
  {
    question: "Is it legal to download music from YouTube?",
    answer: `Use of VibraListen must respect YouTube's terms of service. 
    Make sure you have permission to download the content or that the video has a licence that allows downloads.`,
  },
  {
    question: "How can I report a problem or suggest improvements?",
    answer: "You can get in touch via our support form or send an e-mail to support@vibralisten.com.",
  },
];

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
            <button className="flex justify-between w-full text-lg font-medium py-3 focus:outline-none" onClick={() => toggleFAQ(index)}>
              <span className="text-blue-500">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQs;