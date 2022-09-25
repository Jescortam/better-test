import React from 'react';
import Box from '@mui/material/Box';
import MainContainer from '../MainContainer';
import SignupForm from '../signup/SignupForm';

const SignupPageStyles = { width: '75%', margin: 'auto' };

const SignupPage: React.FC = () => {
  return (
    <MainContainer>
      <Box sx={SignupPageStyles}>
        <SignupForm />
      </Box>
    </MainContainer>
  );
};
export default SignupPage;
