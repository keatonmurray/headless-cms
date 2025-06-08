import React, { useState } from 'react';

const ProductFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);

  return (
    <>
      <div className="d-flex justify-content-end">
        <button 
          className="btn d-md-none mb-3 product-filter-toggle float-end" 
          onClick={toggleFilter}
        >
          <i className="fas fa-sliders-h"></i>
        </button>
      </div>

      <div className={`card filter-card d-md-block ${showFilter ? 'show' : ''}`}>
        <div className="card-body">
          <h5 className="text-center fw-500">Filter</h5>
          <hr />
          <form>
            <h5 className="card-title my-4 fw-500">Availability</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inStock" value="in_stock" />
              <label className="form-check-label" htmlFor="inStock">In Stock</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="soldOut" value="sold_out" />
              <label className="form-check-label" htmlFor="soldOut">Sold Out</label>
            </div>

            <h5 className="card-title my-4 fw-500">Categories</h5>
            {['Indoor Plants', 'Succulents & Cacti', 'Flowering Plants', 'Herbs'].map((label, i) => (
              <div className="form-check" key={i}>
                <input className="form-check-input" type="checkbox" id={`cat${i}`} />
                <label className="form-check-label" htmlFor={`cat${i}`}>{label}</label>
              </div>
            ))}

            <h5 className="card-title my-4 fw-500">Type</h5>
            {['Perennial Plants', 'Annual Plants'].map((label, i) => (
              <div className="form-check" key={`type${i}`}>
                <input className="form-check-input" type="checkbox" id={`type${i}`} />
                <label className="form-check-label" htmlFor={`type${i}`}>{label}</label>
              </div>
            ))}

            <h5 className="card-title my-4 fw-500">Style</h5>
            {['Tropical Plants', 'Desert Plants'].map((label, i) => (
              <div className="form-check" key={`style${i}`}>
                <input className="form-check-input" type="checkbox" id={`style${i}`} />
                <label className="form-check-label" htmlFor={`style${i}`}>{label}</label>
              </div>
            ))}

            <button type="submit" className="btn btn-custom-primary mt-3 w-100">
              <i className="fas fa-sliders-h me-2"></i>
              Apply Filter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
