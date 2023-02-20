import Hero from '../Hero'
import PopularCourses from '../PopularCourses'
import PopularCategories from '../PopularCategories'
import ExploreMore from '../ExploreMore'
import StudentFeedback from '../StudentFeedback'


const Home = () => {
  return (
    <div>
        <Hero/>
        <PopularCourses/>
        <PopularCategories/>
        <StudentFeedback/>
        <ExploreMore/>
        
    </div>
  )
}

export default Home