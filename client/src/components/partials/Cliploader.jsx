import { ClipLoader } from "react-spinners";

const Cliploader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <ClipLoader color="#005800" loading={true} size={50} />
    </div>
  )
}

export default Cliploader
