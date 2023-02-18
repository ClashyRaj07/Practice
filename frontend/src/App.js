import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularCourses from './components/PopularCourses';
import CourseCard from './components/Shared/CourseCard';
import StudentFeedback from './components/StudentFeedback';


function App() {
  return (
    <>
    <Header/>
    <Hero />
    <PopularCourses/>
    <StudentFeedback/>
    <Footer/>
    
    </>
  );
}

export default App;
