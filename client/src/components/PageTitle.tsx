import React from 'react';
import Typography from '@mui/material/Typography';

interface props {
  children: string;
}

const PageTitleStyles = {
  fontWeight: 600,
  mt: 4,
  mb: 1,
};

const PageTitle: React.FC<props> = ({ children }) => {
  return (
    <Typography variant="h4" sx={PageTitleStyles}>
      {children}
    </Typography>
  );
};

export default PageTitle;
