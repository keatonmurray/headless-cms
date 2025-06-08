import bg from '/img/cactus1.jpg'
import Img from '../components/partials/Img'
import FeaturedProducts from '../components/parts/FeaturedProducts'
import Newsletter from '../components/parts/Newsletter'
import ContactUs from '../components/parts/ContactUs'

const Home = () => {
  return (
    <div>
        <div className="home row mt-md-0 mt-5">
          <div className="text-md-start text-center col-12 col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
              <h1 className="heading title-one">Bringing Life 
                  <span className="d-block title-two">To Your Space</span>
              </h1>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center pt-5">
              <figure className="ms-md-auto ms-0">
                <Img src={bg} alt="Background Img" />
              </figure>
          </div>
      </div>
      <FeaturedProducts />
      <Newsletter />
      <ContactUs />
    </div>
  )
}

export default Home
