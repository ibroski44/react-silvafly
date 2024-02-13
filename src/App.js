import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const linksArray = ["Home", "About Us", "Contact", "Products"];
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Navbar links={linksArray} />
      </Router>
    </div>
  );
}

export default App;
