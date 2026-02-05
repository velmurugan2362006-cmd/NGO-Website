import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import DonateWithAmount from "./Donate";
import Contact from "./Contact";
import ImpactStories from "./ImpactStories";
import Login from "./Login";

const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  return isLoggedIn() ? <Navigate to="/" /> : children;
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/donate" element={<DonateWithAmount />} />
                  <Route path="/impactStories" element={<ImpactStories />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
