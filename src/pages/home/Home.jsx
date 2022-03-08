import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import { MdOutlineDoubleArrow } from 'react-icons/md';

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.text}>
        <h1 className={classes.title}>Join us Today!</h1>
        <p className={classes['sub-title']}>
          Sign up for an account and begin using our money managment Web App
          right away.
        </p>
      </div>
      <Link className={classes.link} to="/sign-up">
        Sign Up Page
        <MdOutlineDoubleArrow style={{ marginLeft: '.2rem' }} />
      </Link>
    </div>
  );
}

export default Home;
