import React, { useState, useContext, useEffect, useRef } from 'react';
import DoghnutChart from '../../components/utils/DoughnutChart';
import MonthContext from '../context/MonthContext';
import classes from './ProfileChart.module.scss';

function ProfileChart({ userInfo }) {
  const { month } = useContext(MonthContext);
  const [income, setIncome] = useState(0);
  const [payment, setPayement] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    setIncome(0);
    setPayement(0);
    userInfo.userActions &&
      userInfo.userActions.forEach((action) => {
        if (action.month === month) {
          if (action.type === 'income') {
            setIncome((prevIncome) => (prevIncome += Number(action.amount)));
          } else {
            setPayement(
              (prevPayment) => (prevPayment += Number(action.amount))
            );
          }
        }
        return;
      });
    return () => (isMounted.current = false);
    // eslint-disable-next-line
  }, [month]);

  const userData = {
    labels: ['Income', 'Payment'],
    datasets: [
      {
        label: 'User Gained',
        data: [income, payment],
        backgroundColor: ['green', 'red'],
        borderJoinStyle: 'miter',
        borderWidth: 0,
        padding: 10,
        weight: 20,
      },
    ],
  };
  return (
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
  );
}

export default ProfileChart;
