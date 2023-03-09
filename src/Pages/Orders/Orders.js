import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import OrderRow from "../OrderRow/OrderRow";
import Spinner from '../Spinner/Spinner';
const Orders = () => {
  const { anyUser,isLoading,signOutHandler } = useContext(AuthContext);

  const [allOrders, setAllOrders] = useState([]);
  const navigate=useNavigate();

  
  useEffect(() => {
    fetch(`https://genius-car-server-xi-rust.vercel.app/order/orders/?email=${anyUser?.email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('Access_Token')}`
      }
    })
      .then((res) => {
        if(res.status===401 ||res.status===403){
          signOutHandler();
          
          navigate('/',{replace:true})
        }
        return res.json();
      })
      .then((data) => {
        console.log("All Orders Are:", data);
        setAllOrders(data);
      });
  }, [anyUser?.email]);

  const deleteItemHandling = (serviceItem,_id) => {
    const proceed=window.confirm("Are You Sure To Delete");
    if(proceed){
        console.log("Service Deleted:", serviceItem);
    const remainingOrders = allOrders.filter(
      (Item) => Item.carServiceID !== serviceItem.carServiceID
    );
    setAllOrders(remainingOrders);

    fetch(`https://genius-car-server-xi-rust.vercel.app/order/delete/${_id}`, {
      method: "DELETE",
    });
    }
  };

  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <h1 className="text-center text-danger">
        Your Have Ordered:{allOrders.length} Car Service
      </h1>
      <table class="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Customer</th>
            <th scope="col">Service</th>
            <th scope="col">Price</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            {/* <th scope="col">Message</th> */}
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order, index) => (
            <OrderRow
              key={order._id}
              order={order}
              index={index + 1}
              deleteItemHandling={deleteItemHandling}
            ></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
