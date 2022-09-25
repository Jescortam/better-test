import React from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface props {
  numLikes: number;
}

const ButtonStyles = {
  pt: 1,
  display: 'flex',
  alignItems: 'start',
  width: 80,
};

const CollectionLikeButton: React.FC<props> = ({ numLikes }) => {
  const [variant, setVariant] = React.useState<'contained' | 'outlined'>(
    'outlined'
  );

  const handleOnClick = (event: React.ChangeEvent<any>) => {
    event.stopPropagation();
    event.preventDefault();
    variant === 'outlined' ? setVariant('contained') : setVariant('outlined');
  };

  const renderIcon = () => {
    return variant === 'outlined' ? <FavoriteBorderIcon /> : <FavoriteIcon />;
  };

  return (
    <Button
      sx={ButtonStyles}
      onClick={handleOnClick}
      variant={variant}
      startIcon={renderIcon()}
    >
      {numLikes}
    </Button>
  );
};

export default CollectionLikeButton;
