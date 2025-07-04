const CheckoutSteps = ({ currentStep }) => {
  const steps = ['Panier', 'Livraison', 'Paiement', 'Confirmation'];
  
  return (
    <div className="checkout-steps">
      {steps.map((step, index) => (
        <div 
          key={step} 
          className={`step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-name">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;