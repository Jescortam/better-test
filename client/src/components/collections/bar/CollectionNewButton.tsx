import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CollectionNewButton: React.FC = () => {
  return (
    <Button component={Link} to={'/collections/new'} variant="contained">
      <AddIcon />
      New
    </Button>
  );
};

export default CollectionNewButton;
