import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  // Fonction pour mettre à jour la quantité
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      // Si quantité devient 0, supprimer l'article
      removeItem(id);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Fonction pour supprimer un article
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calcul des totaux
  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <div className="container">
        <h1>Votre panier</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
            <Link to="/products" className="btn">Découvrir nos produits</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.price} $</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                  </div>
                  <p className="item-total">{((item.price * (item.quantity || 1)).toFixed(2))} $</p>
                  <button 
                    className="remove-item" 
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Résumé de la commande</h3>
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} $</span>
              </div>
              <div className="summary-row">
                <span>Taxes (15%)</span>
                <span>{tax.toFixed(2)} $</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{total.toFixed(2)} $</span>
              </div>
              <Link to="/checkout" className="btn">Passer la commande</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;