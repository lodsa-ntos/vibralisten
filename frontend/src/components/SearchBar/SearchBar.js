import React from "react";
import { useState, useEffect } from "react";
import "./SearchBar.css"

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Carregar valor guardado ao iniciar a página
  // Load saved value when starting the page
  useEffect(() => {
    const savedSearch = sessionStorage.getItem("searchTerm");
    if (savedSearch) {
      setSearchTerm(savedSearch);
    }
  }, []);

  // Atualizar o sessionStorage sempre que o user escrever algo
  // Update the sessionStorage whenever the user writes something
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    sessionStorage.setItem("searchTerm", value);
  };

  return (
    <div className="container-form">
      <form>
        <label htmlFor="search">Search</label>
        <input 
          id="search"
          type="search"
          pattern=".*\S.*"
          required
          value={searchTerm}
          onChange={handleSearchChange}
          autoComplete="off"
        />
        <span className="caret"></span>
      </form>
    </div>
    
  );
}

export default SearchBar;