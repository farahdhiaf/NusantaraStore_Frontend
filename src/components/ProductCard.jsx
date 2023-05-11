import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [sold, setSold] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:6000/product", {
        // username,
        // email,
        // password,
        // role,
      });
      
      // Lakukan sesuatu dengan respon dari backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-2 mb-4 ms-0">
      <Link to="product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/heart.png" width="30"></img>
            </Link>
        </div>
        <div className="product-image">
          <img
            src="images/kemeja-batik.png"
            alt="baju batik"
            width="150"
            height="150"
            align-items-center
          />
        </div>
        <div className="product-details">
          {/* <h6 className="price">Rp150.000,-</h6> */}
          <h5 className="product-title">Batik shirts for Men</h5>
          <p className="price">
            Rp150.000,-
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
