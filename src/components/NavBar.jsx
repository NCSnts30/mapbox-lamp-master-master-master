import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import voltaicIcon from '../assets/voltaic.svg';

function NavBar() {
  return (
    <nav className="flex items-center py-3 px-3 border-b-white bg-slate-800">
      <ul className="flex flex-row  items-center basis-full justify-evenly">
        <li>
          <NavLink to="/">
            <img src={voltaicIcon} alt="" />
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/dashboard">Voltaic</NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/#about">About Us</NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              LOGIN
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
