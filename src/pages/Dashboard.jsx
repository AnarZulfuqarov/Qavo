import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProduct } from "../redux/features/productSlice";

const Dashboard = () => {
    const navigate = useNavigate()
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
    },dispatch)
    console.log(products)
  return (
    <div className="container mt-5">

        <div>
            <button className="btn btn-success mb-5" onClick={()=>navigate('/add')}>Add Product</button>
        </div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rate</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.rating.count} ⭐{product.rating.rate}</td>
                <td>
                  <button className="btn btn-warning mr-2" onClick={()=>navigate(`/product/${product.id}`)}>Detail</button>
                  <button className="btn btn-danger" onClick={()=>dispatch(deleteProduct(product.id))}>Delete</button>
                  <button className="btn btn-info" onClick={()=>navigate(`/update/${product.id}`)}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
