import React from 'react';

interface props {
  children: Date;
}

const DateString: React.FC<props> = ({ children }) => {
  return <>{children.toDateString()}</>;
};

export default DateString;
