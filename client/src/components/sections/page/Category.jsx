import Img from "../../partials/Img";
import { Link } from 'react-router-dom';
import ProductFilter from '../../partials/ProductFilter';

const Category = ({ category, products }) => {
  return (
    <div className="mt-5 popular-products px-md-5 px-3">
      <h1 className="text-center">{category.name}</h1>

      <div className="row mt-5">
        <div className="col-12 col-md-4 mb-5">
          <ProductFilter />
        </div>

        <div className="col-12 col-md-8">
          <div className="row g-3">
            {products.map((product) => (
              <div className="col-12 col-md-3" key={product.id}>
                <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
                  <div className="product">
                    <Img
                      src={product.image?.sourceUrl}
                      alt={product.image?.altText || product.name}
                    />
                    <div className="product-body mt-1 text-center">
                      <h5 className="product-title">
                        {product.name}
                        <span className="d-block product-price">
                          {product.price}
                        </span>
                      </h5>
                      <div className="product-rating mb-4">
                        {[...Array(5)].map((_, i) => (
                          <i className="fas fa-star" key={i}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {products.length === 0 && (
              <div className="d-flex align-items-center justify-content-center min-vh-100">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
