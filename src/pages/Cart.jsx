// src/pages/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Votre Panier</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
            <Link to="/products" className="continue-shopping-btn">
             🛍️ Continuer vos achats
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">{item.price.toFixed(2)} $</p>
                  </div>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-total">{(item.price * item.quantity).toFixed(2)} $</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-item-btn"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Résumé de la Commande</h3>
              <div className="summary-row">
                <span>Sous-total:</span>
                <span>{subtotal.toFixed(2)} $</span>
              </div>
              <div className="summary-row">
                <span>Taxes (15%):</span>
                <span>{tax.toFixed(2)} $</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>{total.toFixed(2)} $</span>
              </div>
              <Link to="/checkout" className="checkout-button">
                🛒 Passer la commande
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;