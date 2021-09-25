import logo from '../../images/logo.png'
import React from 'react';
import './Header.css'
const Header = () => {
   return (
      <div className = 'main-header'>
            <div className="headerImg-area">
            <img src={logo} alt="e-maJhon"/>
            </div>
            <div className="headerMenu-area">
               <div className="header-nav">
                  <nav>
                     <ul>
                        <li><a href="#"> Shop </a></li>
                        <li><a href="#"> Order Review</a></li>
                        <li><a href="#"> Manage Inventory here</a></li>
                     </ul>
                  </nav>
               </div>
               <div className="header-search-area">
                  <div className="header-search-field">
                  <input type="text" />
                  <a href="#"> Cart </a>
                  </div>
               </div>
            </div>
         </div>
   );
};
export default Header;
