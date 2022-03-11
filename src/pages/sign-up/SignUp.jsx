import React, { useState } from 'react';
import classes from './SignUp.module.scss';
import { db } from '../../components/utils/firebase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create new user
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: inputs.name,
      });

      // add to database
      const dataCopy = { ...inputs };
      delete dataCopy.password;

      await setDoc(doc(db, 'users', user.uid), dataCopy);

      // navigate out of the page
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes['sign-up']}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.titles}>
          <h1 className={classes.main}>Sign Up</h1>
          <h3 className={classes.sub}>Enter Your information below</h3>
        </div>
        <div className={classes.container}>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              placeholder="Name"
              required
              name="name"
              id="name"
              className={classes.input}
              autoComplete="off"
              onChange={handleChange}
              value={inputs.name}
              type="text"
            />
            <label className={classes.label} htmlFor="name">
              Name
            </label>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              placeholder="Email"
              required
              name="email"
              type="email"
              id="email"
              autoComplete="off"
              className={classes.input}
              onChange={handleChange}
              value={inputs.email}
            />
            <label className={classes.label} htmlFor="email">
              Email
            </label>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              autoComplete="off"
              required
              placeholder="Password"
              type="password"
              name="password"
              id="passowrd"
              className={classes.input}
              onChange={handleChange}
              value={inputs.password}
            />
            <label className={classes.label} htmlFor="email">
              Password
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
