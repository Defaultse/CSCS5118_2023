import Axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lot from "../LotsList/Lot";
import ErrorBoundary from "../ErrorBoundary";
import "./Profile.css";
import Modal from "./Modal";
import Button from "react-bootstrap/esm/Button";
import { GridList } from "@material-ui/core";

export default function Profile(): ReactElement {
  const account = JSON.parse(localStorage.getItem("account") || "{}");
  const [isOpen, setIsOpen] = useState(false);
  const [productList, setProductList] = useState<any[]>([]);
  const [userDetails, setUserDetails] = useState({
    id: null,
    email: "",
    username: "",
  });

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/user-details/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/product/my-list/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user products:", error);
      });
  }, [userDetails]);

  const lotList = productList.map((lot) => (
    <Link to={`lots/${lot.id}`} key={lot.id}>
      <Lot lot={lot} userId={account.id} />
    </Link>
  ));

  return (
    <>
      <div className="info" style={{ zIndex: 1 }}>
        <div className="profile-side">
          <img
            src="https://www.jetphotos.com/assets/img/user.png"
            alt="User Profile"
          />
          <h3 className="profile">Profile info:</h3>
          <h5 className="email"> Your email:{userDetails.email}</h5>
          <p className="id">Account id:{userDetails.id}</p>
          <hr />
          <Button
            variant="primary"
            size="lg"
            block
            onClick={() => setIsOpen(true)}
          >
            delete account
          </Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Changed
          </Modal>
        </div>

        <div className="lots-side">
          <h3 className="lots">Your products:</h3>
          {productList.length > 0 ? (
            <div>
              <ErrorBoundary>
                <GridList
                  cols={2}
                  cellHeight={"auto"}
                  style={{ marginTop: "10px" }}
                >
                  {lotList}
                </GridList>
              </ErrorBoundary>
            </div>
          ) : (
            <>
              <h5>It's empty</h5>
              <Link to="/add-product">Want to start selling?</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
