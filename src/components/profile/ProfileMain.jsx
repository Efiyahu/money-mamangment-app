import React, { useContext } from 'react';
import MonthContext from '../context/MonthContext';
import Action from './action/Action';
import classes from './ProfileMain.module.scss';

function ProfileMain({ userInfo }) {
  const { month } = useContext(MonthContext);

  return (
    <main className={classes.main}>
      <div className={classes.title}>
        <h2>Actions List</h2>
        <p>View your monthly activities for {month}</p>
      </div>
      <ul className={classes['actions-table']}>
        <li className={classes['actions-item']}>Title</li>
        <li className={classes['actions-item']}>Type</li>
        <li className={classes['actions-item']}>Description</li>
        <li className={classes['actions-item']}>Amount</li>
        <li className={classes['actions-item']}>Delete</li>
      </ul>

      {userInfo.userActions.map((action) => (
        <Action userAction={action} key={action.id} />
      ))}
    </main>
  );
}

export default ProfileMain;
