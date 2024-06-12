const BASE_URL = process.env.REACT_APP_BASE_URL_MY_API;

const handleAPIError = (error) => {
 console.error('API Error:', error);
 throw error;
};

const getToken = () => localStorage.getItem('jwt');

export const getAllArticles = async () => {
 try {
  const response = await fetch(`${BASE_URL}/articles`, {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
   },
  });
  const data = await response.json();
  if (!response.ok) {
   handleAPIError(new Error(data.message || 'Terjadi kesalahan saat mengambil data articles'));
  }
  return data;
 } catch (error) {
  handleAPIError(error);
 }
};

export const createArticle = async (article) => {
 try {
  const response = await fetch(`${BASE_URL}/articles`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
   },
   body: JSON.stringify(article),
  });

  const data = await response.json();
  if (!response.ok) {
   handleAPIError(new Error(data.message || 'Terjadi kesalahan saat membuat article'));
  }
  return data;
 } catch (error) {
  handleAPIError(error);
 }
};

export const deleteArticle = async (id) => {
 try {
  const response = await fetch(`${BASE_URL}/articles/${id}`, {
   method: 'DELETE',
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
   },
  });
  const data = await response.json();
  if (!response.ok) {
   handleAPIError(new Error(data.message || 'Terjadi kesalahan saat menghapus article'));
  }
  return data;
 } catch (error) {
  handleAPIError(error);
 }
};
