import React, { ReactElement, useState, useRef, useEffect } from "react";
import Axios from "axios";

interface Product {
  title: string;
  description: string;
  price: number;
}

export default function AddProduct(): ReactElement {
  const account = JSON.parse(localStorage.getItem("account") || "{}");

  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = () => {
    Axios.post(
      "http://127.0.0.1:8000/api/product/create/",
      {
        name: productTitle,
        price: productPrice,
        description: productDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        // Handle error, e.g., display an error message to the user
      });
  };

  function validateInput() {
    let validated = true;
    if (!productTitle || productTitle === " " || productTitle === "") {
      alert("Re-enter title");
      validated = false;
      title.current?.focus();
    }
    if (productDescription.length > 100) {
      alert("Re-enter description");
      validated = false;
      description.current?.focus();
    }
    if (!productPrice) {
      alert("Re-enter price");
      validated = false;
      price.current?.focus();
    }

    if (validated) {
      handleSubmit();
    }
  }

  const title = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  useEffect(() => {
    title.current?.focus();
  }, []);

  // function fileSelectedhandler(event){
  //     setSelectedFile(event.target.files[0])
  // }

  return (
    <form className="container">
      <div className="form-group">
        <label className="pew">Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          onChange={(e) => {
            setProductTitle(e.target.value);
          }}
          ref={title}
        />
      </div>
      <div className="form-group">
        <label className="pew">Set category</label>
        <select
          className="form-control"
          onChange={(e) => {
            setProductCategory(e.target.value);
          }}
        >
          <option value="bread">Bread</option>
          <option value="cakes">Cakes</option>
          <option value="else">Something else</option>
        </select>
      </div>
      <div className="form-group">
        <label className="pew">Price</label>
        <input
          className="form-control"
          type="text"
          name="price"
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          ref={price}
        />
      </div>
      <div className="form-group">
        <label className="pew">Description</label>
        <textarea
          className="form-control"
          name="description"
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input type="file" />
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => validateInput()}
      >
        Submit
      </button>
    </form>
  );
}
