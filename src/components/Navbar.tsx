import { Link } from 'react-router';

import Container from './Container';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-600">
      <Container>
        <Link to="/" className="text-3xl font-bold">
          Home
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
