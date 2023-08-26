import React, { useState, useEffect } from 'react';
import { fetchTokenData, searchPairs } from './public/api';
import SearchBar from './components/SearchBar';
import TokenInfo from './components/TokenInfo';
import TradingPairs from './components/TradingPairs';
import WalletIntegration from './components/WalletIntegration';

function App() {
  const [tokenData, setTokenData] = useState(null);
  const [tradingPairs, setTradingPairs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      searchPairs(searchQuery)
        .then(data => {
          setTradingPairs(data);
        })
        .catch(error => {
          console.error('Error fetching trading pairs:', error);
        });
    }
  }, [searchQuery]);

  const handleTokenSearch = async tokenAddress => {
    try {
      const data = await fetchTokenData(tokenAddress);
      setTokenData(data);
    } catch (error) {
      console.error('Error fetching token data:', error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleTokenSearch} onQueryChange={setSearchQuery} />
      {tokenData && <TokenInfo data={tokenData} />}
      {tradingPairs.length > 0 && <TradingPairs pairs={tradingPairs} />}
      <WalletIntegration />
    </div>
  );
}

export default App;
