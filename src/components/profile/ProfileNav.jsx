import React from 'react';
import { MdSettings } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import classes from './ProfileNav.module.scss';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useAuthStatus from '../../hooks/useAuthStatus';

function ProfileNav() {
  const userId = localStorage.getItem('currentUser');
  const navigate = useNavigate();
  const { setLoggedIn } = useAuthStatus();

  const signOutUser = async () => {
    const auth = getAuth();

    await signOut(auth);

    setLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className={classes.nav}>
      <h1 className={classes.title}>Options</h1>
      <ul className={classes.options}>
        <li
          className={classes.option}
          onClick={() => navigate(`/profile/${userId}/settings`)}
        >
          User Settings <MdSettings style={{ marginLeft: '.3rem' }} />
        </li>
        <li className={classes.option} onClick={() => navigate('/new-action')}>
          Add New Action <AiOutlinePlusCircle style={{ marginLeft: '.3rem' }} />
        </li>
        <li className={classes.option} onClick={signOutUser}>
          Logout <AiOutlineLogout style={{ marginLeft: '.3rem' }} />
        </li>
      </ul>
    </nav>
  );
}

export default ProfileNav;
