import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css"

const Sidebar = () => {
  return (
    <div id="Menu">
     
      <nav>
        <ul>
          <li>
            <NavLink to="/Crop">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/CropType">CropType</NavLink>
          </li>
          
        </ul>
      </nav>
    </div>

  );
};

export default Sidebar;
