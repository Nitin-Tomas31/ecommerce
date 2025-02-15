import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <header
      className="d-flex align-items-center justify-content-center text-center position-relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(163, 163, 163, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/5632387/pexels-photo-5632387.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "94vh",
        width: "100%",
        color: "#fff",
      }}
    >
      <div className="container">
        <h1 className="fw-bold" style={{ fontSize: "3rem", color: "#f8f9fa" }}>
          Purchase Items from All Around the Globe with a Simple Touch
        </h1>
        <p className="lead" style={{ fontSize: "2rem", color: "#e0e0e0" }}>
          Click LETS GO! To Know More
        </p>
        {/* When button is clicked, navigate to /login */}
        <button
          onClick={() => navigate("/login")}
          className="btn btn-light btn-lg fw-bold"
        >
          LETS GO!
        </button>
      </div>
    </header>
  );
};

export default Header;
