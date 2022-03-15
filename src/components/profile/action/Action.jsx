import React, { useContext } from 'react';
import classes from './Action.module.scss';
import MonthContext from '../../context/MonthContext';

function Action({ userAction }) {
  const { month } = useContext(MonthContext);

  if (month === userAction.month) {
    return (
      <div
        className={`${classes.action} ${
          userAction.type === 'income' ? classes.income : classes.payment
        }`}
      >
        <p>{userAction.title}</p>
        <p>{userAction.type}</p>
        <p>{userAction.desc}</p>
        <p>{userAction.amount} $</p>
      </div>
    );
  }

  return null;
}

export default Action;
