// src/pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-not-found">Produit non trouvé</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-content">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">{product.price.toFixed(2)} $</p>
            <p className="short-desc">{product.shortDescription}</p>
            
            <div className="ingredients">
              <h3>Ingrédients clés 🌱</h3>
              <ul>
                {product.keyIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
        
        <div className="product-tabs">
          <button 
            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Avis ({product.reviews.length})
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'description' ? (
            <div className="description-content">
              <h3>Description complète</h3>
              <p>{product.fullDescription}</p>
            </div>
          ) : (
            <div className="reviews-content">
              <h3>Avis clients</h3>
              {product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <div className="review-header">
                      <span className="rating">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </span>
                      <span className="author">{review.author}</span>
                    </div>
                    <p className="review-text">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="no-reviews">Aucun avis pour ce produit</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;