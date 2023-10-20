import Axios from "axios";
import React, { ReactElement } from "react";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  userId: string;
  lot: Lot;
}

interface Lot {
  owner_id: number;
  id: number;
  title: string;
  price: number;
}

export default function Lot({ lot, userId }: Props): ReactElement {
  const account = JSON.parse(localStorage.getItem("account") || "{}");

  function deleteProduct(id: number) {
    Axios.post("http://localhost:8000/delete/product", {
      product_id: id,
    }).then((response) => {
      alert("OK");
      window.location.replace("/profile");
    });
  }

  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "350px", marginLeft: "15px" }}
    >
      <img
        src="/images/demo.jpg"
        className="card-img-top"
        style={{ width: "100%", textAlign: "center" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{lot.title}</h5>
        <p className="card-text">{lot.price}KZT</p>
        {userId == account.id ? (
          <Button onClick={() => deleteProduct(lot.id)}>Delete</Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
