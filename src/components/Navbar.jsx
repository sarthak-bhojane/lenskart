import React, { useState } from 'react';
import { MdAddIcCall } from "react-icons/md";
import { FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import './Navbar.css';


import Eyeglasses from './onclick/Eyeglasses'; // Import the Eyeglasses component
import Computerglasses from './onclick/Computerglasses';
import Kidsglasses from './onclick/Kidsglasses';
import Sunglasses from './onclick/Sunglasses';
import HomeeyetestComponent from './onclick/HomeeyetestComponent';
import Storelocator from './onclick/Storelocator';

function Navbar() {
  const [showEyeglasses, setShowEyeglasses] = useState(false); // State to control the visibility of the Eyeglasses component
  const [showComputerglasses, setShowComputerglasses] = useState(false);
  const [showKidsglasses, setShowKidsglasses] = useState(false);
  const [showSunglasses, setShowSunglasses] = useState(false);
  const [showHomeeyetestComponent, setShowHomeeyetestComponent] = useState(false);
  const [showStorelocator, setShowStorelocator] = useState(false);

  const handleEyeglassesClick = () => {
    setShowEyeglasses(true); // Set showEyeglasses state to true when eyeglasses link is clicked
    setShowComputerglasses(false);
    setShowKidsglasses(false);
    setShowSunglasses(false);
    setShowHomeeyetestComponent(false);
    setShowStorelocator(false);
  };

  const handleComputerglassesClick = () => {
    setShowEyeglasses(false);
    setShowComputerglasses(true); // Set showComputerglasses state to true when computerglasses link is clicked
    setShowKidsglasses(false);
    setShowSunglasses(false);
    setShowHomeeyetestComponent(false);
    setShowStorelocator(false);
  };

  const handleKidsglassesClick = () => {
    setShowEyeglasses(false);
    setShowComputerglasses(false);
    setShowKidsglasses(true); // Set showKidsglasses state to true when kidsglasses link is clicked
    setShowSunglasses(false);
    setShowHomeeyetestComponent(false);
    setShowStorelocator(false);
  };

  const handleSunglassesClick = () => {
    setShowEyeglasses(false);
    setShowComputerglasses(false);
    setShowKidsglasses(false);
    setShowSunglasses(true); // Set showSunglasses state to true when sunglasses link is clicked
    setShowHomeeyetestComponent(false);
    setShowStorelocator(false);
  };
const handleShowHomeeyetestComponentClick = () => {
    setShowEyeglasses(false);
    setShowComputerglasses(false);
    setShowKidsglasses(false);
    setShowSunglasses(false); 
    setShowHomeeyetestComponent(true);
    setShowStorelocator(false);
  };

  const handleShowStorelocatorClick = () => {
    setShowEyeglasses(false);
    setShowComputerglasses(false);
    setShowKidsglasses(false);
    setShowSunglasses(false); 
    setShowHomeeyetestComponent(false);
    setShowStorelocator(true);
  };


  return (
    <>
      <nav className='fnav'>
        <div className='logo'>  
          <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />  
        </div>
        <div className='call'>
          <p><MdAddIcCall />  1800-202-4444</p>
        </div>   
        <div className='input'>
          <a><input type="text" placeholder='What are you looking for?'/></a>
        </div> 
        <p>Track Order</p>
        <p>Sign In & Sign Up</p>
        <p>  <FaRegHeart/>  Wishlist</p>
        <p> <FaCartArrowDown />  Cart</p>
      </nav>
      <nav className='snav'>
        <div>
          <ul className='content-nav'>
            <li onClick={handleEyeglassesClick}>EYEGLASSES</li>
            <li onClick={handleComputerglassesClick}>COMPUTER GLASSES</li>
            <li onClick={handleKidsglassesClick}>KIDS GLASSES</li>
            <li onClick={handleSunglassesClick}>SUNGLASSES</li>
            {/* These links will open respective components */}
            <li onClick={handleShowHomeeyetestComponentClick}>HOME EYE-TEST</li>
            <li onClick={handleShowStorelocatorClick}>STORE LOCATION</li>
          </ul>
        </div>
        <img src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="" />
        <img src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" />
        <img src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png" alt="" />
      </nav>
      {showEyeglasses && <Eyeglasses />}
      {showComputerglasses && <Computerglasses />}
      {showKidsglasses && <Kidsglasses />}
      {showSunglasses && <Sunglasses />}
      {showHomeeyetestComponent && <HomeeyetestComponent />}
      {showStorelocator && <Storelocator />}
    </>
  );
}

export default Navbar;
