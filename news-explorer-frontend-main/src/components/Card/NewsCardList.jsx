import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';
import CardNotFound from '../NotFound/CardNotFound';
import { useDataSearchContext } from '../../context/DataSearchContext';

const NewsCardList = ({ savedArticles, toggleSaveArticle }) => {
 const { dataHasilSearch } = useDataSearchContext();
 const [displayedData, setDisplayedData] = useState([]);
 const [startIndex, setStartIndex] = useState(3);
 const token = localStorage.getItem('jwt');

 useEffect(() => {
  setDisplayedData(dataHasilSearch.slice(0, 3));
 }, [dataHasilSearch]);

 const handleShowMore = () => {
  const newData = dataHasilSearch.slice(startIndex, startIndex + 3);
  setDisplayedData([...displayedData, ...newData]);
  setStartIndex(startIndex + 3);
 };

 const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
  return formattedDate;
 };

 return (
  <>
   {displayedData.length > 0 ? (
    <section className='card-list'>
     <h1 className='card-list__title'>Hasil Pencarian</h1>
     <div className='card-list__wrapper'>
      {displayedData.map((data, index) => (
       <NewsCard
        key={index}
        image={data.urlToImage}
        date={formatDate(data.publishedAt)}
        title={data.title}
        description={data.description}
        author={data.source.name}
        userLoggedIn={token}
        isSaved={savedArticles.some((savedArticle) => savedArticle.title === data.title)}
        toggleSave={() => toggleSaveArticle(data)}
       />
      ))}
     </div>
     {startIndex < dataHasilSearch.length && (
      <div className='card-list__button'>
       <button type='button' onClick={handleShowMore}>
        Tampilkan lebih banyak
       </button>
      </div>
     )}
    </section>
   ) : (
    dataHasilSearch.length === 0 && <CardNotFound />
   )}
  </>
 );
};

export default NewsCardList;
