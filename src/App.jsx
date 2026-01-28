import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DonateWithAmount from "./Donate";
import Contact from "./Contact";
import ImpactStories from "./ImpactStories"; 
function App() {
  return (
    <div>
      <nav style={{ padding: "20px", background: "#2a9d8f", color: "white" }}>
        <Link to="/" style={{ marginRight: "100px", color: "white", fontSize: "18px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "100px", color: "white", fontSize: "18px" }}>About</Link>
        <Link to="/donate" style={{ marginRight: "100px", color: "white", fontSize: "18px" }}>Donate</Link>
        <Link to="/impact stories" style={{ marginRight: "100px", color: "white", fontSize: "18px" }}>Impact Stories</Link>
        <Link to="/contact" style={{ color: "white", fontSize: "18px" }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<DonateWithAmount />} />
        <Route path="/impact stories" element={<ImpactStories/>}/>
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
