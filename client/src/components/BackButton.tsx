import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface props {
  dest: string;
}

const BackButton: React.FC<props> = ({ dest }) => {
  return (
    <Button sx={{ px: 0 }} size="medium" component={Link} to={dest}>
      <ArrowBackIosIcon fontSize="small" />
      <Box pt={0.5}>Back</Box>
    </Button>
  );
};

export default BackButton;
