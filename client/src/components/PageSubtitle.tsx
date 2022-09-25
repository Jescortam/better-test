import React from 'react';
import Typography from '@mui/material/Typography';

interface props {
  children: string;
}

const PageSubtitle: React.FC<props> = ({ children }) => {
  return (
    <Typography variant="h5" my={1}>
      {children}
    </Typography>
  );
};

export default PageSubtitle;
