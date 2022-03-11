import React, { useState } from 'react';
import { UserData } from '../../components/user-data/UserData';
import classes from './Profile.module.scss';
import profile from '../../assets/profile.jpg';
import DoghnutChart from '../../components/utils/DoughnutChart';

function Profile() {
  const [userData, setUserData] = useState({
    labels: ['Lost', 'Gained'],
    datasets: [
      {
        label: 'User Gained',
        data: [UserData[0].userGain, UserData[0].userLost],
        backgroundColor: ['green', 'red'],
        borderJoinStyle: 'miter',
        borderWidth: 0,
        padding: 10,
        weight: 20,
      },
    ],
  });
  return (
    <div className={classes.profile}>
      <header className={classes.header}>
        <div className={classes['image-container']}>
          <img className={classes.image} src={profile} alt="profile" />
        </div>
        <div className={classes.text}>
          <h1 className={classes.name}>Efi Alkhazov</h1>
          <p className={classes.subtext}>
            Navigate your profile for more information on your monthly actions
          </p>
        </div>
      </header>
      <div
        className={classes.chart}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '70%',
            height: '70%',
          }}
        >
          <DoghnutChart chartData={userData} />
        </div>
      </div>
      <main className={classes.main}>Main</main>
      <nav className={classes.nav}>Nav</nav>
      <aside className={classes.sort}>Sort</aside>
    </div>
  );
}

export default Profile;
