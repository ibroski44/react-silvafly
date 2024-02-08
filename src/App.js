import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const linksArray = ["Home", "About", "Contact", "Products"];
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Navbar links={linksArray} />
      </Router>
    </div>
  );
}

export default App;
