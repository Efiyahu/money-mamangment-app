import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDj8XsdGS_OPUykSdQK4ap59f2srqKF4nw',
  authDomain: 'money-managment-app-e12d0.firebaseapp.com',
  projectId: 'money-managment-app-e12d0',
  storageBucket: 'money-managment-app-e12d0.appspot.com',
  messagingSenderId: '375993053128',
  appId: '1:375993053128:web:dbb6b79380ed5855db5afd',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
