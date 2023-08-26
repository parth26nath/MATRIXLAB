// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch, onQueryChange }) {
  const [tokenAddress, setTokenAddress] = useState('');

  const handleSearch = () => {
    onSearch(tokenAddress);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter token address"
        value={tokenAddress}
        onChange={e => setTokenAddress(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
