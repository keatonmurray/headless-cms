import FrontSection from '../components/sections/home/FrontSection'
import MiddleSection from '../components/sections/home/MiddleSection'
import BottomSection from '../components/sections/home/BottomSection'

const Home = () => {
  return (
    <div className="px-md-5 px-3">
      <FrontSection />
      <MiddleSection />
      <BottomSection />
    </div>
  )
}

export default Home
