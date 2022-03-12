import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../components/utils/firebase.config';
import classes from './NewAction.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function NewAction() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    type: '',
    title: '',
    desc: '',
    amount: '',
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRef = doc(db, 'users', localStorage.getItem('currentUser'));

    const objectToPush = { ...inputs, id: uuidv4() };
    await updateDoc(userRef, {
      userActions: arrayUnion(objectToPush),
    });

    setInputs({
      month: '',
      type: '',
      title: '',
      desc: '',
      amount: '',
    });
    navigate('/');
  };

  return (
    <div className={classes['new-action']}>
      <h2 className={classes.title}>Fill in the form to add New Action</h2>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.type}>
          <select
            onChange={handleChange}
            value={inputs.month}
            name="month"
            id="month"
            className={classes.select}
            style={{ marginBottom: '1rem' }}
          >
            <option value="">---Select Month to append---</option>
            <option value="January">January</option>
            <option value="Fabruary">Fabruary</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select
            onChange={handleChange}
            value={inputs.type}
            name="type"
            id="type"
            className={classes.select}
          >
            <option value="">---Select Type---</option>
            <option value="income">Income</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <input
          className={classes.input}
          value={inputs.title}
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          className={classes.input}
          value={inputs.desc}
          type="text"
          id="desc"
          name="desc"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          className={classes.input}
          id="amount"
          name="amount"
          type="number"
          placeholder="Amount"
          value={inputs.amount}
          onChange={handleChange}
        />

        <button type="submit" className={classes.btn}>
          Add new action
        </button>
      </form>
    </div>
  );
}

export default NewAction;
