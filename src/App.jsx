import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";

import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/project" element={<Project />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;