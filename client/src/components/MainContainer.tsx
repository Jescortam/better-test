import React from 'react';
import Container from '@mui/material/Container';

interface props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: props) => {
  return (
    <Container sx={{ width: { xs: '100%', sm: '80%', md: '60%' }, mb: 5 }}>
      {children}
    </Container>
  );
};

export default MainContainer;
