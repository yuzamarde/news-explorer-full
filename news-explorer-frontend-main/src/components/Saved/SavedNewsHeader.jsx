import { useUserContext } from '../../context/DataUserContext';

const SavedNewsHeader = () => {
 const { userData, savedArticles } = useUserContext();
 const getCategoryText = (articles) => {
  // Mengambil semua kategori unik
  const uniqueCategories = [...new Set(articles.map((article) => article.keyword))];

  if (!uniqueCategories.length) {
   return 'Silahkan mencari artikel untuk di save';
  }

  // Mendefinisikan batas jumlah kategori yang akan ditampilkan
  const maxCategoriesToShow = 2;

  // Membuat daftar kategori yang akan ditampilkan
  let displayedCategories = uniqueCategories.slice(0, maxCategoriesToShow);

  // Mengecek apakah ada lebih banyak kategori
  if (uniqueCategories.length > maxCategoriesToShow) {
   const remainingCategoriesCount = uniqueCategories.length - maxCategoriesToShow;
   displayedCategories.push(`dan ${remainingCategoriesCount} lainnya`);
  }

  // Mengonversi nama kategori menjadi kapital (huruf pertama besar)
  displayedCategories = displayedCategories.map((category) => category.charAt(0).toUpperCase() + category.slice(1).toLowerCase());

  // Menggabungkan kategori-kategori yang akan ditampilkan menjadi satu string
  let categoryText = displayedCategories.join(', ');

  // Mengganti "Dan" menjadi "dan"
  categoryText = categoryText.replace(/Dan/g, 'dan');

  return categoryText;
 };

 return (
  <section className='saved-header'>
   <p className='saved-header__subtitle'>Article Tersimpan</p>
   <h1 className='saved-header__title'>
    {userData.name}, kamu memiliki {savedArticles.length} <br /> artikel tersimpan
   </h1>
   <p className='saved-header__description'>
    Berdasarkan kata kunci: <span>{getCategoryText(savedArticles)}</span>
   </p>
  </section>
 );
};

export default SavedNewsHeader;
