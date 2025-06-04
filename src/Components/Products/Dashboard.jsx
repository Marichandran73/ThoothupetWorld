import React, { useState } from 'react';
import Navbar from "../Pages/Mynav";
import Footer from "../Pages/Footer";
import './Dashboard.css';

import Cart from './Cart'

import { v4 as uuidv4 } from 'uuid';

import { addCustomer as addcustomerAction } from '../Slices/CustomerSlice';
import { RemoveItem } from '../Slices/CustomerSlice';


import { useDispatch } from 'react-redux';

import StaticData from './StaticDatas';

const Dashboard = () => {
  const [search, setSearch] = useState('');

  const MainValue = StaticData;

  const [input ,setInput ]=useState({
    id: uuidv4(),
    name:'',
    address:'',
    Contact:'',
    Color:'',
    age:'',
    price:'',
    image: null,
    imagePreview: '',
  });

const dispatch =useDispatch();

function addCustomer(e) {
  
  e.preventDefault();
  if (input.name && input.address && input.Contact) {
    dispatch(addcustomerAction({
  ...input, image: input.imagePreview 
    }

    ));
    setInput({
      id: uuidv4(),
      name: '',
      address: '',
      Contact: '',
      Color:'',
      age: '',
      price: '',
      image: null,
      imagePreview: '',
    });
  } else {
    alert("Please fill in all required fields.");
  }
}


  return (
    <>
    <div className="Overall-container">
      <Navbar search={setSearch} />
      <div className="main-page">
        <div className="cover-left">
          <h1>Welcome to ThoothuPet World!</h1>
          <p>Start petting smart today!</p>
        </div>
        <div className="cover-right">
  <form action="" className="form-head">
  <h1>Upload your pet Details Here...</h1>
    <table>
      <tbody>
      <tr>
        <td>
          <label htmlFor="">pet Types:</label>
        </td>
        <td>
          <input type="text" 
          placeholder="Leave your text here..."
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })} />
        </td>
      </tr>

      <tr>
        <td>
          <label htmlFor="">Address:</label>
        </td>
        <td>
          <input type="text"
           placeholder="Leave your Addres here...."
           value={input.address}
           onChange={(e) => setInput({ ...input, address: e.target.value })} />
        </td>
      </tr>

      <tr>
        <td>
          <label htmlFor="">Contact No:</label>
        </td>
        <td>
          <input type="phone" 
          patttern="[0-9]{10}"
          required
          placeholder="leave your number here..."
          value={input.Contact}
          onChange={(e) => setInput({ ...input, Contact: e.target.value })} />
        </td>
      </tr>

      <tr>
        <td>
          <label htmlFor="">Color :</label>
        </td>
        <td>
          <input
           type="text"
           placeholder="write the color..."
           value={input.Color}
           onChange={(e) => setInput({ ...input, Color: e.target.value })}
           />
        </td>
      </tr>

      <tr>
        <td>
          <label htmlFor="">Age & Month :</label>
        </td>
        <td>
          <input
           type="text"
           placeholder="2 & 6month"
           value={input.age}
           onChange={(e) => setInput({ ...input, age: e.target.value })}
           />
        </td>
      </tr>

      <tr>
        <td>
          <label htmlFor="">Price:</label>
        </td>
        <td>
          <input type="text"
           placeholder="Rs 3000" 
           value={input.price}
          onChange={(e) => setInput({ ...input, price: e.target.value })}/>
        </td>
      </tr>

      <tr>
        <td>
          <label htmlFor="">Image:</label>
        </td>
        <td>
           <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setInput({
                  ...input,
                        image: e.target.files[0], 
                          imagePreview: URL.createObjectURL(e.target.files[0])
    });
  }
}}

        />
        </td>
      </tr>

      <tr>
        <td colSpan="2" style={{ textAlign: "center" }}>
          <button type="submit" onClick={addCustomer}>Submit</button>
        </td>
      </tr>
      </tbody>
    </table>
  </form>
</div>

      </div>

      <div className="overall-product-card">
        {MainValue.filter((val) =>
          val.name.toLowerCase().includes(search.toLowerCase())
        ).map((val) => (
          <div key={val.id} className="product-card">
            <img src={val.image} alt={val.name} />
            <h1 className="Product-name">{val.name}</h1>
            <h4>Price: {val.price}</h4>
            <h4 className="product-heading">Description: <p>{val.describtion}</p></h4>
            <h4 className="product-heading">Achievements: <p>{val.achivements}</p></h4>
          </div>
        ))}
      </div>

      <Cart/>

    </div>
      <Footer />
    </>
  );
};

export default Dashboard;
