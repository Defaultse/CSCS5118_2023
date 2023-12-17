import Axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lot from "./Lot";
import "bootstrap/dist/css/bootstrap.min.css";
import { GridList } from "@material-ui/core";
import Carousel from "./Carousel";

export default function LotsList(): ReactElement {
  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    // Fetch product list from the backend API
    Axios.get("http://127.0.0.1:8000/api/product/all/")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching product list:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  const lotList = productList.map((lot) => (
    <Link to={`lots/${lot.id}`} key={lot.id}>
      <Lot lot={lot} userId={""}></Lot>
    </Link>
  ));

  return (
    <>
      <Carousel />
      <GridList cols={4} cellHeight={"auto"} style={{ marginTop: "10px" }}>
        {lotList}
      </GridList>
    </>
  );
}
