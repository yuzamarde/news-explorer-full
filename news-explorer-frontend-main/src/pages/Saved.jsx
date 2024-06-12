import Layout from '../components/Layout/Layout';
import SavedNews from '../components/Saved/SavedNews';
import SavedNewsHeader from '../components/Saved/SavedNewsHeader';
import { useUserContext } from '../context/DataUserContext';
import { deleteArticle } from '../utils/MyApi';

const Saved = () => {
 const { savedArticles, setSavedArticles } = useUserContext();

 const handleRemoveClick = async (title) => {
  try {
   const articleToDelete = savedArticles.find((article) => article.title === title);

   if (articleToDelete) {
    // Hapus artikel dengan API deleteArticles
    await deleteArticle(articleToDelete._id);

    // Setelah berhasil menghapus artikel dari penyimpanan, perbarui daftar artikel yang disimpan
    const updatedSavedArticles = savedArticles.filter((article) => article.title !== title);
    setSavedArticles(updatedSavedArticles);
   }
  } catch (error) {
   console.error('Error removing article:', error);
  }
 };

 return (
  <Layout type='saved'>
   <SavedNewsHeader />
   {savedArticles.length !== 0 && (
    <div className='card-list'>
     <div className='card-list__wrapper-saved'>
      {savedArticles.map((data) => (
       <SavedNews key={data._id} image={data.image} date={data.date} title={data.title} description={data.text} category={data.keyword} author={data.source} handleRemoveClick={handleRemoveClick} />
      ))}
     </div>
    </div>
   )}
  </Layout>
 );
};

export default Saved;
