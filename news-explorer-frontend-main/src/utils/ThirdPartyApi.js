const API_KEY = process.env.REACT_APP_THIRD_PARTY_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL_THIRD_PARTY_API;

export const fetchNews = async (searchQuery) => {
 try {
  const from = new Date();
  from.setDate(from.getDate() - 7); // 7 hari sebelum tanggal hari ini
  const to = new Date();
  const apiUrl = `${BASE_URL}/everything?q=${searchQuery}&apiKey=${API_KEY}&from=${from.toISOString()}&to=${to.toISOString()}&pageSize=100`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
   throw new Error('Request failed');
  }

  const data = await response.json();
  return data.articles;
 } catch (error) {
  throw error;
 }
};
