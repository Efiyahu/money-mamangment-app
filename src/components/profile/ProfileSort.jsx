import React, { useContext } from 'react';
import MonthContext from '../context/MonthContext';
import classes from './ProfileSort.module.scss';

function ProfileSort() {
  const { month, setMonth } = useContext(MonthContext);

  const handleClick = (e) => {
    setMonth(e.target.innerHTML);
  };

  return (
    <aside className={classes.sort}>
      <h3>Select a month</h3>
      <ul className={classes.months}>
        <li
          className={`${classes.month} ${
            month === 'January' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          January
        </li>
        <li
          className={`${classes.month} ${
            month === 'Fabruary' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          Fabruary
        </li>
        <li
          className={`${classes.month} ${
            month === 'March' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          March
        </li>
        <li
          className={`${classes.month} ${
            month === 'April' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          April
        </li>
        <li
          className={`${classes.month} ${
            month === 'May' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          May
        </li>
        <li
          className={`${classes.month} ${
            month === 'June' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          June
        </li>
        <li
          className={`${classes.month} ${
            month === 'July' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          July
        </li>
        <li
          className={`${classes.month} ${
            month === 'August' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          August
        </li>
        <li
          className={`${classes.month} ${
            month === 'September' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          September
        </li>
        <li
          className={`${classes.month} ${
            month === 'October' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          October
        </li>
        <li
          className={`${classes.month} ${
            month === 'November' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          November
        </li>
        <li
          className={`${classes.month} ${
            month === 'December' ? classes.active : ''
          }`}
          onClick={handleClick}
        >
          December
        </li>
      </ul>
    </aside>
  );
}

export default ProfileSort;
