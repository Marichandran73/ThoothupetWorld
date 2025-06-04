import React from 'react'
import { useState } from "react";
import "./Nav.css";
import { FaLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";


export const Mynav = ({ search }) => {

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">ThoothuPet World</div>
        <a href="#">Home</a>
        <a href="#">Sports</a>
        <a href="#">Live</a>
        <a href="#">Casino</a>
        <a href="#">Promotions</a>
      </div>
      <div className="navbar-right">
        <div className='nav-right-input'>
          <input type="text"
          placeholder="shearch here...."
          onChange={(e)=>search(e.target.value) }
          />
          <button>Search</button>
        </div>
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
        <select className="lang-select">
          <option>EN</option>
          <option>ES</option>
          <option>FR</option>
        </select>

        <button onClick={toggleDarkMode} className="btn mode-toggle">
          {darkMode ? <FaLightbulb className="light" /> : <MdDarkMode className="dark-theme"  />}
        </button>
      </div>
    </nav>
    
    </>
  )
}

export default Mynav;