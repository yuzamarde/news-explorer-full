const BASE_URL = process.env.REACT_APP_BASE_URL_MY_API;

const headers = {
 'Content-Type': 'application/json',
};

// Fungsi untuk menghandle kesalahan API
const handleAPIError = (error) => {
 console.error('API Error:', error);
 throw error;
};

export const registerUser = async (email, password, name) => {
 try {
  const response = await fetch(`${BASE_URL}/signup`, {
   method: 'POST',
   headers,
   body: JSON.stringify({ email, password, name }),
  });

  const data = await response.json();

  if (!response.ok) {
   handleAPIError(new Error(data.message || 'Terjadi kesalahan saat mendaftar'));
  }

  return data;
 } catch (error) {
  handleAPIError(error);
 }
};

export const loginUser = async (email, password) => {
 try {
  const response = await fetch(`${BASE_URL}/signin`, {
   method: 'POST',
   headers,
   body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
   handleAPIError(new Error(data.message || 'Terjadi kesalahan saat login'));
  }

  return data;
 } catch (error) {
  handleAPIError(error);
 }
};

export const getCurrentUser = async (token) => {
 try {
  const response = await fetch(`${BASE_URL}/users/me`, {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
  });

  const data = await response.json();

  if (!response.ok) {
   handleAPIError(new Error(data.message || 'Terjadi kesalahan saat mengambil data'));
  }
  return data;
 } catch (error) {
  handleAPIError(error);
 }
};
