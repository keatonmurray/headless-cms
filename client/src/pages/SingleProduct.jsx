import productImg from '/img/product1.jpg';
import Img from '../components/partials/Img';

const SingleProduct = () => {
  return (
    <div className="mt-5 single-product px-md-5 px-3">
      <div className="row justify-content-center">
         <div className="col-12 col-md-5 d-flex flex-column align-items-center pb-2">
            <div className="single-product-image-wrapper">
              <Img src={productImg} className="single-product-image" alt="Product Image" />
            </div>
          </div>
          <div className="col-12 col-md-7 d-flex justify-content-md-start align-items-md-start align-items-center justify-content-center">
              <div className="product-details">
                  <h4 className="text-md-start text-center">Corsage Cactus</h4>
                  <h3 className="text-md-start text-center">$12.50</h3>
                  <div className="control-quantity d-flex align-items-center justify-content-md-start justify-content-center mt-3">
                    <button className="btn btn-sm btn-custom-primary me-2">
                        <i className="fas fa-minus"></i>
                    </button>
                    <h2 className="mx-4">1</h2>
                    <input type="hidden" className="form-control w-25" value="1" min="1" />
                    <button className="btn btn-sm btn-custom-primary ms-2">
                        <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="mt-3 variation">
                    <label className="form-label">Select Variation</label>
                    <select className="form-select">
                      <option value="Cactus 1">Cactus 1</option>
                      <option value="Cactus 2">Cactus 2</option>
                      <option value="Cactus 3">Cactus 3</option>
                      <option value="Cactus 4">Cactus 4</option>
                    </select>
                  </div>
                  <p className="text-muted my-3 text-md-start text-center">Items in stock: 900</p>
                  <div className="w-100 mt-4">
                    <button className="btn btn-sm btn-custom-primary w-100">
                        <i className="fas fa-cart-plus me-2"></i>
                        Add to cart
                    </button>
                  </div>
                  <h5 className="mt-4">Bring a touch of the desert into your home with our Desert Bloom Cactus, the perfect low-maintenance plant that thrives on neglect! Known for its striking appearance and resilience, this cactus features plump, spiny stems that store water, making it ideal for busy plant lovers or those with a less-than-green thumb.</h5>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SingleProduct
