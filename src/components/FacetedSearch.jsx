import { useState } from 'react';

const FacetedSearch = ({ products, onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: ''
  });

  const categories = [...new Set(products.map(p => p.category))];
  const priceRanges = ['Moins de 10$', '10$ - 20$', 'Plus de 20$'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="faceted-search">
      <h4>Filtrer par</h4>
      <div className="filter-group">
        <h5>Catégorie</h5>
        <select name="category" onChange={handleFilterChange}>
          <option value="">Toutes les catégories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <h5>Prix</h5>
        <select name="priceRange" onChange={handleFilterChange}>
          <option value="">Tous les prix</option>
          {priceRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FacetedSearch;