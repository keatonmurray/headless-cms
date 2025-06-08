import bg from '/img/cactus1.jpg'
import Img from '../components/partials/Img'

const Home = () => {
  return (
    <div class="home row mt-md-0 mt-5">
        <div class="text-md-start text-center col-12 col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
            <h1 class="heading title-one">Bringing Life 
                <span class="d-block title-two">To Your Space</span>
            </h1>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center align-items-center pt-5">
            <figure class="ms-md-auto ms-0">
              <Img src={bg} alt="Background Img" />
            </figure>
        </div>
    </div>
  )
}

export default Home
