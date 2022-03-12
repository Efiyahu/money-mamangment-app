import React, { useState } from 'react';

const MonthContext = React.createContext();

export const MonthContextProvider = ({ children }) => {
  const [month, setMonth] = useState('January');
  return (
    <MonthContext.Provider value={{ month, setMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthContext;
