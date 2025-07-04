const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Naturium</h3>
          <p>Des soins solides, naturels et durables</p>
        </div>
        <div className="footer-section">
          <h4>Liens</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/products">Produits</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>contact@naturel.com</p>
        
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Naturium. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;