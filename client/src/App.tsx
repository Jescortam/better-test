import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage';
import CollectionIndexPage from './components/pages/CollectionIndexPage';
import CollectionShowPage from './components/pages/CollectionShowPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="collections">
            <Route index element={<CollectionIndexPage />} />
            <Route path=":collectionId" element={<CollectionShowPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
