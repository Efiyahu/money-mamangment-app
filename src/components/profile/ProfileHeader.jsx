import React from 'react';
import classes from './ProfileHeader.module.scss';

function ProfileHeader({ userInfo }) {
  return (
    <header className={classes.header}>
      <div className={classes['image-container']}>
        <img className={classes.image} src={userInfo.image_url} alt="profile" />
      </div>
      <div className={classes.text}>
        <h1 className={classes.name}>{userInfo.name}</h1>
        <p className={classes.subtext}>
          Navigate your profile for more information on your monthly actions
        </p>
      </div>
    </header>
  );
}

export default ProfileHeader;
