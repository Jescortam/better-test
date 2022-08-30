import React from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface props {
  likes: number;
}

const CollectionLikeButton = ({ likes }: props) => {
  const [variant, setVariant] = React.useState<'contained' | 'outlined'>(
    'outlined'
  );

  const handleOnClick = (e: React.ChangeEvent<any>) => {
    e.stopPropagation();
    e.preventDefault();
    variant === 'outlined' ? setVariant('contained') : setVariant('outlined');
  };

  const renderIcon = () => {
    return variant === 'outlined' ? <FavoriteBorderIcon /> : <FavoriteIcon />;
  };

  return (
    <Button
      sx={{
        pt: 1,
        display: 'flex',
        alignItems: 'start',
        width: 80,
      }}
      onClick={handleOnClick}
      variant={variant}
      startIcon={renderIcon()}
    >
      {likes}
    </Button>
  );
};

export default CollectionLikeButton;
