import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ContactUs from "./components/Contact";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CourseInterface from "./components/CourseInterface";

function App() {
  return (
    <>
      
      <Router>
        <Header />
        <CourseInterface/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
          
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
