import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
        console.log("Orders Data : ", res.data);
      }).catch((error) => {
        console.log("Error in orders  : ", error);
      })
  }, [])
  console.log("allOrders : ", allOrders)


  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((order, index) => {
              console.log(order.name);


              return(
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td >{order.mode}</td>
              </tr>
              );
            })}

          </tbody>
        </table>

      </div>

    </>
  );
};

export default Orders;
