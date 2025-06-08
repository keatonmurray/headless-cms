import Img from "../components/partials/Img"
import product from "/img/product1.jpg"
import ProductFilter from "../components/partials/ProductFilter"

const FeaturedProducts = () => {
  return (
    <div className="mt-5 popular-products px-md-5 px-3">
        <h1 className="text-center">Garden Spotlight Finds</h1>
        <div className="row mt-5">
            <div className="col-12 col-md-4 mb-5">
                <ProductFilter />
            </div>
            <div className="col-12 col-md-8">
                <div className="row g-3">
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                            <div className="product-body mt-1 text-center">
                                <h5 className="product-title">
                                    Cactus
                                    <span className="d-block product-price">$19.99</span>
                                </h5>
                                 <div class="product-rating mb-4">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                            <div className="product-body mt-1 text-center">
                                <h5 className="product-title">
                                    Cactus
                                    <span className="d-block product-price">$19.99</span>
                                </h5>
                                <div class="product-rating mb-4">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                            <div className="product-body mt-1 text-center">
                                <h5 className="product-title">
                                    Cactus
                                    <span className="d-block product-price">$19.99</span>
                                </h5>
                                <div class="product-rating mb-4">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                            <div className="product-body mt-1 text-center">
                                <h5 className="product-title">
                                    Cactus
                                    <span className="d-block product-price">$19.99</span>
                                </h5>
                                <div class="product-rating mb-4">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts
