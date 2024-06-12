import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { linkData } from './utils/LinkData';
import PageNotFound from './components/NotFound/PageNotFound';
import Saved from './pages/Saved';
import { LoadingProvider } from './context/LoadingContext';
import { DataSearchProvider } from './context/DataSearchContext';
import { UserProvider } from './context/DataUserContext';
import ProtectedRoute from './components/PotectedRoute';

const { home, savedNews, notFound } = linkData;

const router = createBrowserRouter([
 {
  path: home,
  element: <Home />,
 },
 {
  path: savedNews,
  element: (
   <ProtectedRoute>
    <Saved />
   </ProtectedRoute>
  ),
 },
 {
  path: notFound,
  element: <PageNotFound />,
 },
]);

function App() {
 return (
  <UserProvider>
   <DataSearchProvider>
    <LoadingProvider>
     <RouterProvider router={router} />
    </LoadingProvider>
   </DataSearchProvider>
  </UserProvider>
 );
}

export default App;
