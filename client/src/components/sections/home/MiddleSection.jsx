import Img from '../../partials/Img';
import bg from "/img/plant1.jpg"
import Cliploader from '../../partials/Cliploader';
import { Link } from 'react-router-dom';
import { GET_FEATURED_PRODUCTS } from '../../../graphql/queries/featuredProducts';
import { useQuery } from '@apollo/client';

const MiddleSection = () => {
    const { error, loading, data } = useQuery(GET_FEATURED_PRODUCTS);
      const featuredProducts = data?.featuredProducts?.nodes || [];
    
      if (loading) {
         return (
            <Cliploader />
        );
      }
    
      if (error) {
        return (
          <p className="text-danger text-center">
            Something went wrong: {error.message}
          </p>
        );
      }
    
    return (
        <div>
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
                    {featuredProducts.length > 0 ? (
                    featuredProducts.map((product) => {
                        const price =
                        product.__typename === 'SimpleProduct'
                            ? product.price
                            : product.variations?.nodes?.[0]?.price;

                        const imageUrl = product.featuredImage?.node?.sourceUrl;

                        return (
                        <div
                            key={product.id || product.slug}
                            className="col-12 col-md-3 mb-4 d-flex align-items-center justify-content-center"
                        >
                            <Link
                            to={product.uri}
                            className="text-decoration-none text-dark"
                            >
                            <div className="product text-center">
                                <Img
                                src={imageUrl || '/placeholder.jpg'}
                                alt={product.name}
                                />
                                <div className="product-body mt-2">
                                <h2 className="product-price">
                                    {price ? `${price}` : 'Price unavailable'}
                                    <span className="d-block product-name">{product.name}</span>
                                </h2>
                                </div>
                            </div>
                            </Link>
                        </div>
                        );
                    })
                    ) : (
                    <p className="text-center">No featured products available</p>
                    )}
                </div>
            </div>
            <div className="row newsletter mt-5">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-center mb-3">
                        The most important things are not things, so we design experiences
                    </h1>
                    <form className="w-100 px-3 mt-3">
                        <div className="input-group">
                            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="To subscribe to our newsletter, we need your email address" />
                            <span className="input-group-text bg-transparent border-0 border-bottom rounded-0">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                        </div>
                    <div className="mt-3 d-flex justify-content-md-end justify-content-center">
                            <button className="btn btn-sm btn-custom-primary">
                                <i className="fa-solid fa-bell me-2" style={{color: 'white', fontSize:'15px'}}></i>
                                Subscribe
                            </button>
                    </div>
                    </form>
                </div>
                <div className="mt-4 col-12 col-md-6 d-flex align-items-md-end align-items-center justify-content-center justify-content-md-end">
                    <Img src={bg} alt="Background Image" />
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
