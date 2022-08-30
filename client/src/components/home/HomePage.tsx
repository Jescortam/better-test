import Grid from '@mui/material/Grid';
import HomePageButton from './HomePageButton';
import HomePageContent from './HomePageContent';

const HomePage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={5}
      rowSpacing={4}
    >
      <Grid item md={12}>
        <HomePageContent />
      </Grid>
      <Grid item md={3}>
        <HomePageButton to="/collections">Explore Collections</HomePageButton>
      </Grid>
      <Grid item md={3}>
        <HomePageButton to="/collections/new" color="secondary">
          Create Collections
        </HomePageButton>
      </Grid>
    </Grid>
  );
};

export default HomePage;
