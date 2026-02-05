import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/");
    }
  }, [navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Give All Details");
      return;
    }
    if (isLogin) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email === email && user.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Success");
        navigate("/"); 
      } else {
        alert("Invalid credentials");
      }
    } else {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Registered Successfully");
      setIsLogin(true);
    }
  };

  return (
    <div className="a">
      <div className="b">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p className="x">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
