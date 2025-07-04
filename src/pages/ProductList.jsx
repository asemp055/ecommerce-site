import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FacetedSearch from '../components/FacetedSearch';
import { products } from '../data/products';

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filters) => {
    let result = [...products];
    
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    
    if (filters.priceRange) {
      switch(filters.priceRange) {
        case 'Moins de 10$':
          result = result.filter(p => p.price < 10);
          break;
        case '10$ - 20$':
          result = result.filter(p => p.price >= 10 && p.price <= 20);
          break;
        case 'Plus de 20$':
          result = result.filter(p => p.price > 20);
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(result);
  };

  return (
    <div className="product-list">
      <div className="container">
        <h1>Nos produits naturels</h1>
        <div className="content">
          <FacetedSearch products={products} onFilter={handleFilter} />
          <div className="products">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;