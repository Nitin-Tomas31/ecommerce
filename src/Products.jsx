import React, { useEffect, useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from FakeStoreAPI
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "beige",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* Stylish Heading */}
        <h1
          className="text-center mb-4 fw-bold"
          style={{
            color: "black",
            fontSize: "2.5rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Shop the Best Deals
        </h1>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div
                className="card border-0 shadow-sm rounded-3 p-3"
                style={{
                  background: "#fff",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <div className="position-relative text-center">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      transition: "transform 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6
                    className="card-title fw-bold"
                    style={{ height: "45px", overflow: "hidden" }}
                  >
                    {product.title}
                  </h6>
                  <div className="d-flex align-items-center">
                    <span className="text-warning me-2">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </span>
                    <span className="small text-muted">(250 reviews)</span>
                  </div>
                  <h5 className="fw-bold mt-2 text-danger">${product.price}</h5>
                  <button className="btn btn-primary mt-2 d-flex align-items-center justify-content-center gap-2 fw-bold">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
