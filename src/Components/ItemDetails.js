import ItemCard from "./ItemCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemDetails = ({ value }) => {
  const [searchResult, setsearchResult] = useState("");

  const getData = () => {
   axios.get(
        `https://imexcargobackend.onrender.com/api/products/64fc9890d515df621ce90a67`
      )
      .then((response) => {
        const data = response?.data;
        setsearchResult(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-center pt-20">
      <ItemCard data={searchResult} />
    </div>
  );
};

export default ItemDetails;
