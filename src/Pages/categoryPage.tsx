import React, { useState, useEffect } from "react";
import { itemsInterface } from "../Interfaces/interface";
import Navbar from "../components/navbar";
import axios from "axios";
import Search from "../components/search";
import Category from "../components/categories";
import ReactPaginate from "react-paginate";

const CategoryPage = () => {
  const [products, setProducts] = useState<itemsInterface[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      if (response) {
        setProducts(response.data);
        // console.log(response.data);
        //  dispatch(Products_div(response.data))
        // console.log(response.data);
      }
    });
  }, []);

  return (
    <div className="">
      {/* <Navbar /> */}
      <div>
        <Navbar products={products} />
      </div>
      <div className="block">
        <div className="flex w-full h-full">
          <Category />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CategoryPage;
