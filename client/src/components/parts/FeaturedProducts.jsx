import Img from '../partials/Img'
import { Link } from 'react-router-dom';
import { GET_FEATURED_PRODUCTS } from '../../graphql/queries/products';
import { useQuery } from '@apollo/client';
import { ClipLoader } from "react-spinners";

const FeaturedProducts = () => {

  const {error, loading, data } = useQuery(GET_FEATURED_PRODUCTS)
  const featuredProducts = data?.featuredProducts?.nodes || [];

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <ClipLoader color="#005800" loading={true} size={50} />
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center">Something went wrong: {error.message}</p>;
  }

  return (
    <div className="featured-products mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="text-md-start text-center">
            Discover
            <span className="d-block">Our Finest Selections</span>  
          </h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center align-items-center mt-3">
          <button className="btn btn-custom-primary">
            <i className="fa-solid fa-eye me-2"></i>
              See All Collections
            </button>
        </div>
      </div>
      <div className="row mt-5">
        {featuredProducts && featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <div key={product.id} className="mb-3 col-12 col-md-3 mb-2 d-flex align-items-center justify-content-center">
              <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <div className="product">
                  <Img src={product.featuredImage.node.sourceUrl} alt="Featured Product" />
                  <div className="product-body text-center">
                    <h2 className="product-price">
                      {product.price}
                      <span className="d-block product-name">{product.name}</span>
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No featured products available</p>
        )}
      </div>
    </div>
  )
}

export default FeaturedProducts
