import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // Déclaration ajoutée

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-content">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">{product.price} $</p>
            <p className="short-desc">{product.shortDescription}</p>
            
            <div className="ingredients">
              <h3>Ingrédients clés 🌱</h3>
              <ul>
                {product.keyIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div className="quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <button 
              className="add-to-cart"
              onClick={() => addToCart(product, quantity)}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
        
        <div className="product-tabs">
          <button 
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            Description complète
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Avis clients ({product.reviews.length})
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'description' ? (
            <div className="description">
              <h3>Description</h3>
              <p>{product.fullDescription}</p>
            </div>
          ) : (
            <div className="reviews">
              <h3>Avis clients</h3>
              {product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <div className="review-header">
                      <span className="rating">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </span>
                      <span className="author">- {review.author}</span>
                    </div>
                    <p className="comment">"{review.comment}"</p>
                  </div>
                ))
              ) : (
                <p>Aucun avis pour ce produit</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;