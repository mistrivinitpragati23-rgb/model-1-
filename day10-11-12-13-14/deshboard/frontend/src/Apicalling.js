import React, { useState, useEffect } from "react";
import "./ApiCalling.css";

function ApiCalling() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewType, setViewType] = useState("grid"); // "grid" or "list"

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from FakeStore API");
        }
        return response.json(); 
      })
      .then((data) => {
        setProducts(data);     
        setIsLoading(false);    
      })
      .catch((err) => {
        setError(err.message); 
        setIsLoading(false); 
      });
  }, []); 

  // Get unique categories list dynamically
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter products based on search term & category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="api-page">
        <div className="api-header-section">
          <h2>Product Catalog</h2>
          <p>Fetching dynamic listings from FakeStore REST API.</p>
        </div>
        
        {/* Skeleton Catalog Loader */}
        <div className="catalog-loading-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card glass-panel">
              <div className="skeleton-img loading-shimmer"></div>
              <div className="skeleton-line loading-shimmer title"></div>
              <div className="skeleton-line loading-shimmer category"></div>
              <div className="skeleton-row-wrap">
                <div className="skeleton-line loading-shimmer price"></div>
                <div className="skeleton-line loading-shimmer btn"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-page">
        <div className="api-error-card glass-panel">
          <div className="error-icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="error-alert-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3>Failed to Load Products</h3>
          <p>{error}</p>
          <button className="glow-btn retry-btn" onClick={() => window.location.reload()}>Retry Connection</button>
        </div>
      </div>
    );
  }

  return (
    <div className="api-page">
      <div className="api-header-section">
        <div className="api-title-desc">
          <h2>Product Catalog</h2>
          <p>Explore dynamic inventories linked directly from FakeStore API.</p>
        </div>
        
        {/* Toggle Grid/List buttons */}
        <div className="view-toggle-wrap glass-panel">
          <button 
            className={`toggle-btn ${viewType === "grid" ? "active" : ""}`}
            onClick={() => setViewType("grid")}
            title="Grid View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </button>
          <button 
            className={`toggle-btn ${viewType === "list" ? "active" : ""}`}
            onClick={() => setViewType("list")}
            title="List View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="filter-toolbar glass-panel">
        <div className="search-box-wrap">
          <svg className="search-box-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input 
            type="text" 
            placeholder="Search products by title or tag..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-search-input"
          />
        </div>

        <div className="category-filters-scroll">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-pill ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products-found glass-panel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="empty-box-icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          <h3>No products match your search</h3>
          <p>Try clearing filters or search keyword to find standard records.</p>
          <button className="clear-filter-btn glow-btn" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
            Clear Search
          </button>
        </div>
      ) : viewType === "grid" ? (
        
        /* Product Grid Card View */
        <div className="products-grid-layout">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card glass-panel">
              <div className="product-img-container">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-card-img" 
                />
                <span className="product-category-badge">{product.category}</span>
              </div>
              
              <div className="product-card-body">
                <h3 className="product-card-title" title={product.title}>
                  {product.title}
                </h3>
                
                <div className="product-rating-bar">
                  <span className="stars-icon">★</span>
                  <span className="rating-value">{product.rating?.rate || "4.2"}</span>
                  <span className="rating-count">({product.rating?.count || "120"})</span>
                </div>
                
                <div className="product-card-footer">
                  <div className="product-card-price">${product.price.toFixed(2)}</div>
                  <button className="product-view-btn glow-btn">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        
        /* Modern Table List View */
        <div className="api-table-wrap glass-panel">
          <table className="api-table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>ID</th>
                <th style={{ width: "10%" }}>Thumbnail</th>
                <th style={{ width: "50%" }}>Product Title</th>
                <th style={{ width: "15%" }}>Category</th>
                <th style={{ width: "10%" }}>Rating</th>
                <th style={{ width: "10%" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="table-product-id">#{product.id}</td>
                  <td className="table-product-img-wrap">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="api-img" 
                    />
                  </td>
                  <td className="table-product-title">
                    <strong>{product.title}</strong>
                  </td>
                  <td>
                    <span className="table-category-badge">{product.category}</span>
                  </td>
                  <td>
                    <span className="table-rating">★ {product.rating?.rate || "4.2"}</span>
                  </td>
                  <td className="api-price">${product.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ApiCalling;