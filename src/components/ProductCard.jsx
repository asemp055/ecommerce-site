const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price} $</p>
      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart(product)}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;