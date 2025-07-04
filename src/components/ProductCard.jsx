// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
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