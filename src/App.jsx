import React, { useState } from 'react';
import './indec.css';
import image2 from './assets/pexels-jdm-kuruma-1304609967-30145510.jpg'


function App() {

  return (
    <>
    <div className='hero'>
      <header>
        <div className='carzone'>
          <h1>CarZone</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Featured cars</li>
            <li>New Cars</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div className='image'>
        <img src={image2}  />
        <div className='overlay'>
          <h2>
            GET YOUR DREAM CAR AT DREAM PRICE
          </h2>
          <h3>
            LARGEST INVENTORY IN ASIA
          </h3>
        </div>
        <div className='cont'>
          <h1>CONTACT US</h1>
        </div>
      </div>
      </div>
    </>
  )
}



export default App
