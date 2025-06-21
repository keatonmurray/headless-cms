import React from 'react'

const BottomSection = () => {
  return (
    <div className="contact-us mt-5">
        <h1 className="text-center">
            Have any questions? 
            <span className="d-block">
                We'd love to hear about it!
            </span>
        </h1>
       <form>
            <div className="row">
                <div className="col-12 col-md-6 my-4">
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="First Name" />
                </div>
                <div className="col-12 col-md-6 my-4">
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Last Name" />
                </div>
                    <div className="col-12 col-md-6 my-4">
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Phone Number" />
                </div>
                <div className="col-12 col-md-6 my-4">
                    <input type="email" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Email Address" />
                </div>
                <div className="col-12 my-4">
                    <textarea className="form-control border-0 border-bottom rounded-0 shadow-none" rows="5" placeholder="Message"></textarea>
                </div>
            </div>
       </form>
    </div>
  )
}

export default BottomSection
