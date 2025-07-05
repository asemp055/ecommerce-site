// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // 👈 à importer

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/produit/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <Link to={`/produit/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-price">{product.price.toFixed(2)} $</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
