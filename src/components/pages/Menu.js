import React from 'react'
import "../styling/Menu.css"

// function Menu() {
//   return (
//     <>
//       <div className='menu'>
//         Menu
//       </div>
//     </>
//   )
// }

import { FaUtensils } from 'react-icons/fa';
import { MdLocalDining } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';

function Menu() {
  return (
    <div className="restaurant-page">
     
        {/* <div className="logo">
          <MdLocalDining size={40} />
          <h2>Restaurant Name</h2>
        </div>
        <div className="menu-icon">
          <RiMenuLine size={30} />
        </div> */}
     
      <header className="header">
        <h1>Welcome to our restaurant!</h1>
        <p>We serve delicious food and drinks.</p>
        <div className="utensils">
          <FaUtensils size={60} />
        </div>
      </header>
    </div>
  );
}

export default Menu