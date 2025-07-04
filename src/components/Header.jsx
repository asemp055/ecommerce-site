import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Naturium</Link>

        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/products">Produits</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart /> <span>0</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;