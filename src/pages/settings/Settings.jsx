import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../components/utils/firebase.config';
import classes from './Settings.module.scss';

function Settings() {
  const userId = localStorage.getItem('currentUser');
  const [disabled, setDisabled] = useState(true);
  const [updatedName, setUpdatedName] = useState('');

  useEffect(() => {
    const getUserInfo = async () => {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUpdatedName(userSnap.data().name);
        console.log(userSnap.data().name);
      } else {
        console.log('No Such Data');
      }
    };

    getUserInfo();
  }, [userId]);

  const handleClick = async () => {
    if (disabled) {
      setDisabled(false);
    } else {
      setDisabled(true);
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        name: updatedName,
      });
    }
  };

  return (
    <div className={classes.settings}>
      <h1 className={classes.title}>Settings</h1>
      <div className={classes.container}>
        <div className={classes['update-profile']}>
          <div>
            <p onClick={handleClick}>Click to change display Name </p>
            <input
              maxLength={20}
              className={classes.input}
              disabled={disabled}
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </div>
          <p>Change Profile Image</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
