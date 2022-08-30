import Box from '@mui/material/Box';

interface props {
  image: string;
}

const CollectionImage = ({ image }: props) => {
  const getImage = () => {
    if (image === '') {
      return 'placeholder.png';
    }
  };

  return (
    <Box component="img" sx={{ width: 80, height: 80 }} src={getImage()} />
  );
};

export default CollectionImage;
