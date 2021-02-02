import React from 'react';
import classes from './Head.module.css';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className = {classes.header}>
      <section className = {classes["section"]}>
        <NavLink className = {classes.nav} to="/news"><img className = {classes.logo} src={logo} alt="logo" /></NavLink>
        <form>
          <input className = {classes.research} type="search" placeholder="" />
        </form>
      </section>
    </header >
  )
}
console.log(classes);
export default Header;