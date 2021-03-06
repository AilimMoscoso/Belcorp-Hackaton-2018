import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './belcorp.png';
import './Header.css';
import IconWhite from '../assets/icon/icon-white.png'

const Header = ({ itemsCount }) => {
  return (
    <nav className="navbar contentNav">
      <Link to="/Belcorp-Hackaton-2018" className="navbar-brand"><img src={Logo} className="logo" alt="Logo de Belcorp" /></Link>
      <div className="nav">
        <Link to="/esika" className="m-2">Esika</Link>
        <Link to="/lbel" className="m-2">L'bel</Link>
        <Link to="/cyzone" className="m-2">Cyzone</Link>
        <Link to="/shopList" className="m-2"><img className="" height="25px" src={IconWhite}></img><span className="badge badge-pill badge-danger">{itemsCount}</span></Link>
      </div>
    </nav>
  )
}
export default Header