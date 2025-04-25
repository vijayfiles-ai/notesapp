import { React, useState } from 'react'
import './Navbar.css'
import { FiSearch, FiX } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logo from '../../assets/left-logo.png'
import profile from '../../assets/user-profile.png'
import cart from '../../assets/shopping-cart.png'
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className='navbar'>

      <div className="navbar-left">
        <img src={logo} alt="" />

        <div className="nav-map">
          <button className="location-button" onClick={toggleDropdown}>
            <p>Delivery Location</p> <IoIosArrowDown />
          </button>
          {showDropdown && (
            <div className="location-dropdown">
              <button className="close-button" onClick={toggleDropdown}>
                <FiX />
              </button>
              <h4>Your Location</h4>
              <p>Use current location</p>
              <input type="text" placeholder="Enter your location" />
            </div>
          )}
        </div>

      </div>


      <div className="center-display">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search for" />
        </div>
      </div>


      <div className="nav-right">
        <ul className="profile">
          <li>
            <Link to="/login" className='url-link'>
              <img src={profile} alt="" />
              <h1>Profile</h1>
            </Link>
          </li>
        </ul>
        <ul className="shopping-cart">
          <li><img src={cart} alt="" /></li>
          <li><h1>Cart</h1></li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar
