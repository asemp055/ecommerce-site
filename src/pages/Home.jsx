import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const Home = () => {
  return (
    <div className="home">
      {/* Bannière */}
      <section className="banner">
        <div className="banner-content">
          <h1>Des soins solides, naturels et durables</h1>
          <Link to="/products" className="btn btn-banner">Découvrir les produits</Link>
        </div>
      </section>

      {/* Meilleures ventes */}
      <section className="best-sellers">
        <div className="container">
          <h2 className="section-title">🌿 NOS MEILLEURES VENTES</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">💚 POURQUOI NOUS CHOISIR ?</h2>
          <div className="reasons-grid">
           <div className="reasons-horizontal">
             <span>100% Québecois</span>
             <span>•</span>
             <span>100% Naturel</span>
             <span>•</span>
             <span>Zéro Déchet</span>
           </div>
          </div>
        </div>
      </section>

      {/* Livraison */}
      <section className="delivery">
        <div className="container">
          <h2 className="section-title">📦 LIVRAISON & ÉCHANTILLONS</h2>
          <p className="delivery-text">Livraison rapide + échantillon offert à l'achat</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2 className="section-title">📬 NEWSLETTER</h2>
          <p className="newsletter-text">10% de réduction pour votre première commande</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;