import { Link } from 'react-router-dom';  
import { useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="checkout-step">
            <h2>Livraison</h2>
            <div className="form-group">
              <label>Prénom</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Adresse</label>
              <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Ville</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Code postal</label>
              <input 
                type="text" 
                name="postalCode" 
                value={formData.postalCode} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="buttons">
              <button type="button" onClick={nextStep}>Continuer</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="checkout-step">
            <h2>Paiement</h2>
            <div className="form-group">
              <label>Numéro de carte</label>
              <input 
                type="text" 
                name="cardNumber" 
                value={formData.cardNumber} 
                onChange={handleChange} 
                placeholder="1234 5678 9012 3456" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Date d'expiration</label>
              <input 
                type="text" 
                name="expiryDate" 
                value={formData.expiryDate} 
                onChange={handleChange} 
                placeholder="MM/AA" 
                required 
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input 
                type="text" 
                name="cvv" 
                value={formData.cvv} 
                onChange={handleChange} 
                placeholder="123" 
                required 
              />
            </div>
            <div className="buttons">
              <button type="button" onClick={prevStep}>Retour</button>
              <button type="button" onClick={nextStep}>Continuer</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="checkout-step">
            <h2>Confirmation</h2>
            <div className="order-summary">
              <h3>Merci pour votre commande!</h3>
              <p>Nous avons envoyé un email de confirmation à {formData.email}</p>
              <div className="shipping-info">
                <h4>Adresse de livraison</h4>
                <p>{formData.firstName} {formData.lastName}</p>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.postalCode}</p>
              </div>
            </div>
            <div className="buttons">
                
            <Link to="/survey" className="btn">Donnez votre avis</Link>
              <Link to="/" className="btn">Retour à l'accueil</Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="checkout">
      <div className="container">
        <CheckoutSteps currentStep={step} />
        {renderStep()}
      </div>
    </div>
  );
};

export default Checkout;