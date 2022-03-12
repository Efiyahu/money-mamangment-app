import React, { useState, useEffect } from 'react';
import classes from './Profile.module.scss';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../components/utils/firebase.config';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileMain from '../../components/profile/ProfileMain';
import ProfileNav from '../../components/profile/ProfileNav';
import ProfileChart from '../../components/profile/ProfileChart';
import ProfileSort from '../../components/profile/ProfileSort';

function Profile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem('currentUser');

      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserInfo(userSnap.data());
      } else {
        console.log('Wrong user');
      }
    };

    getUser();
  }, [setUserInfo]);

  if (userInfo) {
    return (
      <div className={classes.profile}>
        <ProfileHeader userInfo={userInfo} />
        <ProfileChart userInfo={userInfo} />
        <ProfileMain userInfo={userInfo} />
        <ProfileNav userInfo={userInfo} />
        <ProfileSort userInfo={userInfo} />
      </div>
    );
  }
  if (!userInfo) {
    return <h3>Loading...</h3>;
  }
}

export default Profile;
