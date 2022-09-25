import React from 'react';
import Box from '@mui/material/Box';
import SignupForm from '../signup/SignupForm';

const SignupPageStyles = { width: '50%', margin: 'auto' };

const SignupPage: React.FC = () => {
  return (
    <Box sx={SignupPageStyles}>
      <SignupForm />
    </Box>
  );
};
export default SignupPage;
