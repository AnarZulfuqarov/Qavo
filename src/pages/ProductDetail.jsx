import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/features/productSlice";

const ProductDetail = () => {
  const {id} = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  const findProduct = products.find((product) => product.id == id);
  console.log(products)
  return <div className="container">
    <div className="row">
        <div className="col-md-6">
          <img src={findProduct?.image} alt={findProduct?.name} style={{width:"300px",height:"300px"}}/>
        </div>
        <div className="col-md-6">
          <h2>{findProduct?.title}</h2>
          <p>{findProduct?.category}</p>
          <p>{findProduct?.description}</p>
          <p>Price: ${findProduct?.price}</p>
          {/* <button >Add to Cart</button> */}
        </div>
    
    </div>
  </div>;
};

export default ProductDetail;
