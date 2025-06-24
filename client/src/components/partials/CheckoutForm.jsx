import CountrySelect from "./CountrySelect"

const CheckoutForm = () => {
  return (
    <div className="row mt-4">
        <div className="col-12 col-md-6 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="First Name" />
        </div>
        <div className="col-12 col-md-6 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Last Name" />
        </div>
        <div className="col-12 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Street Address" />
        </div>
        <div className="col-12 col-md-6 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Apt #" />
        </div>
        <div className="col-12 col-md-6 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="City" />
        </div>
        <div className="col-12 col-md-6 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="State" />
        </div>
        <div className="col-12 col-md-6 my-2">
            <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="ZIP Code" />
        </div>
        <div className="col-12 my-2">
            <CountrySelect />
        </div>
    </div>
  )
}

export default CheckoutForm
