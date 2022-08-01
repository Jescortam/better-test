import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './auth/Signup';
import Login from './auth/Login';
import FlashcardCreate from './flashcards/FlashcardCreate';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/flashcards/new" element={<FlashcardCreate />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
