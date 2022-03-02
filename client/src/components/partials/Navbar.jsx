import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";

//nav links and routes

function NavBar() {
  const [isActive, setActive] = useState(false);

  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  function toggleMenu() {
    setActive(!isActive);
  }

  function handleClick1() {
    setActive1(!isActive1);
  }
  function handleClick2() {
    setActive2(!isActive2);
  }

  function handleClick3() {
    setActive3(!isActive3);
  }

  return (
    <header>
      <div className="logo">
        <DragHandleIcon
          className="menu-icon"
          fontSize="large"
          onClick={toggleMenu}
        />
        <Link to="/">AWSOMECARS</Link>
      </div>
      <div className={`navbar  ${isActive && "active-menu"}`}>
        <div className="dropdown">
          <button onClick={handleClick1}>SUPERCARS</button>
          <div className={`dropdown-items ${isActive1 && "dropdown-active"} `}>
            <Link to="/cars/Lamborghini">Lamborghini</Link>
            <Link to="/cars/Ferrari">Ferrari</Link>
            <Link to="/cars/Porsche">Porsche</Link>
            <Link to="/cars/McLaren">McLaren</Link>
            <Link to="/cars/Maserati">Maserati</Link>
            <Link to="/cars/BMW">BMW</Link>
            <Link to="/cars/Audi">Audi</Link>
            <Link to="/cars/Mercedes-Benz">Mercedes Benz</Link>
            <Link to="/cars/Aston-Martin">Aston Martin</Link>
          </div>
        </div>
        <div className="dropdown">
          <button onClick={handleClick2}>HYPERCARS</button>
          <div className={`dropdown-items ${isActive2 && "dropdown-active"} `}>
            <Link to="/cars/Bugatti">Bugatti</Link>
            <Link to="/cars/Pagani">Pagani</Link>
            <Link to="/cars/Koenigsegg">Koenigsegg</Link>
          </div>
        </div>
        <div className="dropdown">
          <button onClick={handleClick3}>LUXURYCARS</button>
          <div className={`dropdown-items ${isActive3 && "dropdown-active"} `}>
            <Link to="/cars/Rolls-Royce">Rolls Royce</Link>
            <Link to="/cars/Bentley">Bentley</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </header>
  );
}

export default NavBar;
