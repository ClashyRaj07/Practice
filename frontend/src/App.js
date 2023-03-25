import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ContactUs from "./components/Contact";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CourseInterface from "./components/CourseInterface";
import Courses from "./components/Courses/Courses";
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      
      <Router>
        {/* <Courses/> */}
        <Header />
        {/* <CourseInterface/> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/notfound" element={<NotFound/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
          <Route exact path="/courses" element={<Courses/>}/>
          <Route exact path="/course/:id" element={<CourseInterface/>}/>
          
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
