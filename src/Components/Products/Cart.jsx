import React from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { RemoveItem } from '../Slices/CustomerSlice';

const Cart = () => {
  const customers = useSelector((state) => state.customer); 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(RemoveItem(id));
  };

  return (
    <div className="main-card">
      <h1>Currently Available Things</h1>
      {customers && customers.length > 0 ? (
        customers.map((customer, index) => (
          <div key={index} className="customer-card">
            <img src={customer.imagePreview || customer.image} alt={customer.name} />
            <h2>{customer.name}</h2>
            <p>Address: {customer.address}</p>
            <p>Pincode: {customer.pincode}</p>
            <p>Age: {customer.age}</p>
            <p>Price: {customer.price}</p>
            <MdDelete onClick={() => handleDelete(customer.id)} className="dlt-btn" />
          </div>
        ))
      ) : (
        <p>No customers available yet.</p>
      )}
    </div>
  );
};

export default Cart;
