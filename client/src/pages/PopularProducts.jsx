import Img from "../components/partials/Img"
import product from "/img/product1.jpg"
import ProductFilter from "../components/partials/ProductFilter"

const PopularProducts = () => {
  return (
    <div className="mt-5 popular-products px-md-5 px-3">
        <h1 className="text-center">Hello, plant lovers.</h1>
        <div className="row mt-5">
            <div className="col-12 col-md-4 mb-5">
                <ProductFilter />
            </div>
            <div className="col-12 col-md-8">
                <div className="row g-3">
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="product">
                            <Img src={product} alt="Product"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularProducts
