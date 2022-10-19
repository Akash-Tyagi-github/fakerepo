import React, { useEffect, useState } from "react";
import axios from "axios";
import { GETAPI } from "../Helper/GETAPI";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Listitems from "./Listitems";
import "./Home.css"
const Home = () => {
  const [productfromRedux, setProductfromRedux] = useState([]);

  const[viewstate,setViewstate]=useState(true);

  const products = useSelector((state) => state);
  console.log("Products", products.productReducer.products);

  const displayProduct = () => {
    let data = products.productReducer.products;
    setProductfromRedux(data);
  };

  const dispatch = useDispatch();
  const GETAPI = async () => {
    const response = await axios
      .get("https://api.pujakaitem.com/api/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    GETAPI();
    displayProduct();
  }, []);

  return (
    <>
      <div className="main">
        <div className="filters">yes</div>
        <div className="section">
          <div className="view">
            <button
            onClick={()=>{setViewstate(true)}}
            >Grid View</button>
            <button
            onClick={()=>{setViewstate(false)}}
            
            >List View</button>
          </div>
          <div className="list-items">
            <Listitems products={products.productReducer.products}
            viewstate={viewstate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
