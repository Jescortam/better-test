import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/auth/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
        <li>
          <Link to="/flashcards/new">Create Flashcard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
