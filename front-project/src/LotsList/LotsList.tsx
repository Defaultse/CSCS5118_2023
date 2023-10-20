import Axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lot from "./Lot";
import "bootstrap/dist/css/bootstrap.min.css";
import { GridList } from "@material-ui/core";
import Carousel from "./Carousel";

export default function LotsList(): ReactElement {
  const [productList, setProductList] = useState<any[]>([
    {
      id: 1,
      owner_id: 2,
      title: "Product 1",
      price: 19.99,
      description: "Description of Product 1",
      is_sold: false,
      category: "Category A",
    },
    {
      id: 2,
      owner_id: 3,
      title: "Product 2",
      price: 29.99,
      description: "Description of Product 2",
      is_sold: true,
      category: "Category B",
    },
  ]);

  const lotList = productList.map((lot) => (
    <Link to={`lots/${lot.id}`}>
      <Lot key={lot.id} lot={lot} userId={""}></Lot>
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
