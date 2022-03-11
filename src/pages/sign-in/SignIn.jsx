import React, { useState } from 'react';
import classes from './SignIn.module.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [inputs, setInputs] = useState({
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

    // sign in account
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );

      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes['sign-in']}>
      <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.titles}>
          <h1 className={classes.main}>Sign In</h1>
          <h3 className={classes.sub}>Enter Your information below</h3>
        </div>
        <div className={classes.container}>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              placeholder="Email"
              required
              name="email"
              type="email"
              id="email"
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
