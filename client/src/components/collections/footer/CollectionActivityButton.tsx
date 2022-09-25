import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

interface props {
  id: string;
  route: string;
  variant?: 'contained' | 'outlined' | 'text';
  label: string;
}

const CollectionActivityButton: React.FC<props> = (props) => {
  const { id, route, variant, label } = props;

  return (
    <Button
      sx={{ mr: 1 }}
      component={Link}
      to={`/collections/${id}/${route}`}
      variant={variant}
    >
      {label}
    </Button>
  );
};

export default CollectionActivityButton;
