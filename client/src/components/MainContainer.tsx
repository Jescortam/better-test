import React from 'react';
import Container from '@mui/material/Container';

interface props {
  children: React.ReactNode;
}

const MainContainerStyles = {
  width: { xs: '100%', sm: '80%', md: '60%' },
  mb: 5,
};

const MainContainer: React.FC<props> = ({ children }) => {
  return <Container sx={MainContainerStyles}>{children}</Container>;
};

export default MainContainer;
