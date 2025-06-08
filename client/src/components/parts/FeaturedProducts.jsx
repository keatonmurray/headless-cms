import Img from '../partials/Img'
import featuredProductImg from '/img/cactus1.jpg'

const FeaturedProducts = () => {
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
          <button className="btn btn-custom-primary">See All Collections</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="mb-3 col-12 col-md-3 mb-2 d-flex align-items-center justify-content-center">
          <div className="product">
            <Img src={featuredProductImg} alt="Featured Product" />
            <div className="product-body text-center">
              <h2 className="product-price">
                $19.99
                <span className="d-block product-name">Cactus</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mb-3 col-12 col-md-3 mb-2 d-flex align-items-center justify-content-center">
          <div className="product">
            <Img src={featuredProductImg} alt="Featured Product" />
            <div className="product-body text-center">
              <h2 className="product-price">
                $19.99
                <span className="d-block product-name">Cactus</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mb-3 col-12 col-md-3 mb-2 d-flex align-items-center justify-content-center">
          <div className="product">
            <Img src={featuredProductImg} alt="Featured Product" />
            <div className="product-body text-center">
              <h2 className="product-price">
                $19.99
                <span className="d-block product-name">Cactus</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mb-3 col-12 col-md-3 mb-2 d-flex align-items-center justify-content-center">
          <div className="product">
            <Img src={featuredProductImg} alt="Featured Product" />
            <div className="product-body text-center">
              <h2 className="product-price">
                $19.99
                <span className="d-block product-name">Cactus</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
