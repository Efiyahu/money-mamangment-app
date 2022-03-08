import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';

function Header() {
  const navigate = useNavigate();

  return (
    <nav className={classes.header}>
      <div className={classes.title}>
        <h1 onClick={() => navigate('/')}>Budgety.</h1>
      </div>
      <Link className={classes.link} to="/sing-in">
        Login
      </Link>
    </nav>
  );
}

export default Header;
