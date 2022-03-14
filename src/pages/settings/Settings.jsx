import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import { ref, uploadBytes } from '@firebase/storage';
import { db, storage } from '../../components/utils/firebase.config';
import classes from './Settings.module.scss';

function Settings() {
  const userId = localStorage.getItem('currentUser');
  const [disabled, setDisabled] = useState(true);
  const [updatedName, setUpdatedName] = useState('');
  const [image, setImage] = useState(null);
  const currentUserId = localStorage.getItem('currentUser');
  const isMounted = useRef(true);

  useEffect(() => {
    const getUserInfo = async () => {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUpdatedName(userSnap.data().name);
      } else {
        console.log('No Such Data');
      }
    };

    getUserInfo();

    return () => (isMounted.current = false);
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

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const storageRef = ref(storage, `/images/${currentUserId}/profile`);

    if (image) {
      await uploadBytes(storageRef, image);
    } else {
      alert('No image to upload!');
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
          <div>
            <h3 style={{ marginBottom: '2rem' }}>Change Profile Image</h3>
            <input
              className={classes.input}
              type="file"
              onChange={handleChange}
            />
            <button className={classes.btn} onClick={handleUpload}>
              Set Profile Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
