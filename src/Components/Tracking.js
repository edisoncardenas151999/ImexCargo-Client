import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Tracking = () => {
  const [items, setItems] = useState("");
  const [searchResult, setsearchResult] = useState("");

  const id = "64fc9890d515df621ce90a67";

  const getData = () => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        const data = response?.data;
        setsearchResult(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    setItems(event.target.value);
  };

  return (
    <>
      <div className="inputContainer">
        <input
          className="input"
          placeholder="Enter Tracking Number"
          type="text"
          autoFocus
          value={items}
          onChange={handleChange}
        />
        {searchResult?._id === items ? (
          <Link to={"/itemDetails"}>
            <button className="btn">Track Package</button>
          </Link>
        ) : (
          <Link to={"/noResult"}>
            <button className="btn">Track Package</button>
          </Link>
        )}
      </div>
      <div className="h3Header">
        <h3 className="h3Header"> Track any package, freight and shipment</h3>
        <p className="pTagTracking">
          Having bought in the online store always want to know where the
          package is now? To save time checking the sites of postal companies
          manually, I created "Parcels" website and mobile apps which will
          automatically check every relevant postal, courier and logistics
          company website on your behalf. To find out where your parcel is, you
          need to know only tracking number of your package.
        </p>
      </div>
    </>
  );
};

export default Tracking;
