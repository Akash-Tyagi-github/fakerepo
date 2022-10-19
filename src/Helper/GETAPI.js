import React from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";


export async function GETAPI() {

 return  await axios
    .get("https://api.pujakaitem.com/api/products")
   
}
