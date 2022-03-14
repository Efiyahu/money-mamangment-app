import { getDownloadURL, listAll, ref } from 'firebase/storage';
import React, { useEffect, useRef } from 'react';
import { storage } from '../utils/firebase.config';
import classes from './ProfileHeader.module.scss';
import blankImage from '../../assets/blank.png';

function ProfileHeader({ userInfo }) {
  const isMounted = useRef(true);
  const userId = localStorage.getItem('currentUser');

  useEffect(() => {
    const setImageURL = async () => {
      const img = document.getElementById('profile');

      // check if there is even a profile pic in the beginning

      const listRef = ref(storage, `/images/${userId}`);
      const res = await listAll(listRef);

      if (res.items.length !== 0) {
        try {
          const imageRef = ref(storage, `/images/${userId}/profile`);
          console.log(imageRef);
          const url = await getDownloadURL(imageRef);
          if (url) {
            img.setAttribute('src', url);
          } else {
            img.setAttribute('src', blankImage);
          }
        } catch (error) {
          img.setAttribute('src', blankImage);
          return null;
        }
      } else {
        img.setAttribute('src', blankImage);
      }
    };
    setImageURL();

    return () => (isMounted.current = false);
  }, [userId]);

  return (
    <header className={classes.header}>
      <div className={classes['image-container']}>
        <img
          className={classes.image}
          id="profile"
          src={userInfo.image_url}
          alt="profile"
        />
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
