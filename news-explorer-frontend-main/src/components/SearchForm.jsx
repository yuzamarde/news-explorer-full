import { useState } from 'react';
import { useLoadingContext } from '../context/LoadingContext';
import { fetchNews } from '../utils/ThirdPartyApi';
import { useDataSearchContext } from '../context/DataSearchContext';

const SearchForm = () => {
 const [search, setSearch] = useState('');
 const [errors, setErrors] = useState('');
 const { loading, toggleLoading } = useLoadingContext();
 const { setDataSearch } = useDataSearchContext();

 const determineCategory = (searchTerm) => {
  return searchTerm;
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!search) {
   setErrors('Please enter a search term');
   return;
  }

  toggleLoading();

  console.log('loading: ', loading);

  try {
   const response = await fetchNews(search);

   // Menentukan kategori berdasarkan kata kunci pencarian
   const category = determineCategory(search);

   // Memasukkan kategori ke dalam data hasil search
   const dataWithCategory = response.map((item) => ({
    ...item,
    category,
   }));

   setDataSearch(dataWithCategory);
   setErrors('');
   setSearch('');
  } catch (error) {
   setErrors('Error fetching data:', error);
  } finally {
   toggleLoading();
  }
 };

 return (
  <form className='search' onSubmit={handleSubmit}>
   <input type='text' placeholder='Masukkan topik' className='search__input' value={search} onChange={(e) => setSearch(e.target.value)} required />
   <button type='submit' className='search__button'>
    Cari
   </button>
   {errors && <p className='search__error'>{errors}</p>}
  </form>
 );
};

export default SearchForm;
