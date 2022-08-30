import Box from '@mui/material/Box';

interface props {
  views: number;
}

const CollectionViewsBox = ({ views: numViews }: props) => {
  return (
    <Box mx={1.5} fontSize={14}>
      {numViews} {numViews === 1 ? 'view' : 'views'}
    </Box>
  );
};

export default CollectionViewsBox;
