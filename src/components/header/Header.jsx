import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';
import useAuthStatus from '../../hooks/useAuthStatus';
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useAuthStatus();

  const signOutUser = async () => {
    const auth = getAuth();

    await signOut(auth);

    setLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className={classes.header}>
      <div className={classes.title}>
        <h1 onClick={() => navigate('/')}>Budgety.</h1>
      </div>
      <p className={classes.copyright}>
        &copy; created by me Efi Alkhazov for my Portfolio Usage
      </p>
      {loggedIn ? (
        <p
          style={{ cursor: 'pointer' }}
          className={classes.link}
          onClick={signOutUser}
        >
          Logout
        </p>
      ) : (
        <Link className={classes.link} to="/sign-in">
          Login
        </Link>
      )}
    </nav>
  );
}

export default Header;
