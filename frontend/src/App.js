import './App.css';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularCategories from './components/PopularCategories.jsx';
import PopularCourses from './components/PopularCourses';
import StudentFeedback from './components/StudentFeedback';
import ViewPdf from './components/ViewPdf';
 


function App() {
  return (
    <>
    <Header />
    <Hero />
    <PopularCourses/>
    <PopularCategories/>
    <StudentFeedback/>
    <ExploreMore/>

    <ViewPdf/>
    <Footer/>
    
    </>
  );
}

export default App;
