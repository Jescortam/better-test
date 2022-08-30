import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MainContainer from '../MainContainer';
import BackButton from '../BackButton';
import PageSubtitle from '../PageSubtitle';
import CustomMenu from '../CustomMenu';
import CollectionDetails from '../collections/CollectionDetails';
import FlashcardCardList from '../flashcards/FlashcardCardList';
import collections from '../../dbPlaceholder/collections';

const collection = collections[0];

const CollectionShowPage = () => {
  return (
    <MainContainer>
      <BackButton dest={'/collections'} />
      <CollectionDetails collection={collection} />
      <Divider variant="middle" sx={{ my: 4 }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <PageSubtitle>Flashcards</PageSubtitle>
        <Box>
          <CustomMenu text={'Sort By'} menuItems={['Author', 'Upload Date']} />
          <Button>Select</Button>
        </Box>
      </Box>
      <FlashcardCardList />
    </MainContainer>
  );
};

export default CollectionShowPage;
