// api.js
const BASE_URL = "https://api.dexscreener.com/latest";

export async function fetchTokenData(tokenAddress) {
  const response = await fetch(`${BASE_URL}/dex/tokens/${tokenAddress}`);
  const data = await response.json();
  return data;
}

export async function searchPairs(query) {
  const response = await fetch(`${BASE_URL}/dex/search/?q=${query}`);
  const data = await response.json();
  return data;
}
