import React, { useState, useEffect } from 'react';
import { Cards } from './Cards';
import axios from 'axios';

export const Main = () => {
  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9f82deb88a766ca905ad49be7a45af4c&hash=2a0ed50adbb90ef40cf3612619cd1096");
  const [originalItems, setOriginalItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      const results = res.data.data.results;
      setOriginalItems(results);
      setFilteredItems(results);
    };
    fetch();
  }, [url]);

  const filterCharacters = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredCharacters = originalItems.filter((character) => character.name.toLowerCase().includes(search));
    setFilteredItems(filteredCharacters);
  };

  return (
    <>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src='./Images/logo.png' alt='logo' id='logo' />
        </a>
      </nav>

      <div className='header'>
        <div className='bg'></div>
        <div className='search-bar'>
          <input type="search" placeholder='Search' className='search' onChange={(e) => filterCharacters(e)} />
        </div>
      </div>

      <div className='content'>
        {(!filteredItems.length) ? <p> Character Not Found :'(</p> : <Cards data={filteredItems} />}
      </div>
    </>
  );
};
