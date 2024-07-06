
import React, { useState } from 'react';
import styles from './style.module.css';
import searchImage from '../../img/icons/search.svg'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Выполняется поиск:', query);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Поиск..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        className={styles.searchButton}
        onClick={handleSearch}
        style={{ backgroundImage: `url(${searchImage})` }}
      >
      </button>
    </div>
  );
};

export default SearchBar;
