import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({balance}) => {

  return (
    <nav className="navbar">

      <Link to="/">
        <div className="navbar-link"> Transactions </div>
      </Link>
      <Link to="/Operations">
        <div  className="navbar-link">Operations</div>
      </Link>
      <Link to="/Breakdowns">
        <div  className="navbar-link">Breakdown </div>
      </Link>
<h1 className='Balance'>     {balance}</h1> 

    </nav>
  );
}

export default Navbar;
