import Img from "../partials/Img"
import bg from "/img/plant1.jpg"
const Newsletter = () => {
  return (
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
  )
}

export default Newsletter
