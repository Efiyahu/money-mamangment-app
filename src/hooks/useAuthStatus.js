import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, useRef } from 'react';

function useAuthStatus() {
  const isMounted = useRef(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          localStorage.setItem('currentUser', auth.currentUser.uid);
        } else {
          localStorage.removeItem('currentUser');
        }
        setLoading(false);
      });
    }

    return (isMounted.current = false);
  }, [loggedIn]);

  return {
    loggedIn,
    setLoggedIn,
    loading,
  };
}

export default useAuthStatus;
