import React from "react";
import { Link } from "react-router-dom";


export const NavBar = () => (
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/introduction">Introduction</Link></li>
      <li><Link to="/methodologies">Methodologies</Link></li>
      <li><Link to="/currentplan">Current Plan</Link></li>
    </ul>
  ); 