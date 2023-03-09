import React, { useEffect, useState } from "react";
import './OrderRow.css';

const OrderRow = ({ order,index,deleteItemHandling }) => {
  const { _id,carServiceID,serviceName,price,customer,email,phone,message} = order;

  const [specificOrder,setSpecificOrder]=useState({});

    useEffect(()=>{
        fetch(`https://genius-car-server-xi-rust.vercel.app/car/service/${carServiceID}`)
        .then(res=>res.json())
         .then(data=>{
            console.log("Specific Order is:",data[0]);
            setSpecificOrder(data[0]);
         })
    },[]);
  return (
    <tr>
      <th scope="row">{index}</th>
      <td><div className="image-div-sizing"><img src={specificOrder?.img } className="  rounded img-fluid "></img></div></td>
      <td>{customer}</td>
      <td>{serviceName}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>{phone}</td>
      {/* <td>{message}</td> */}
      <td><button 
        
      className="btn btn-secondary">Pending</button></td>
      <td><button 
        onClick={()=>deleteItemHandling(order,_id)}
      className="btn btn-danger">X</button></td>
    </tr>
  );
};

export default OrderRow;
