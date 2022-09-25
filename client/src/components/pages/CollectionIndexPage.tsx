import React from 'react';
import MainContainer from '../MainContainer';
import PageTitle from '../PageTitle';
import CollectionBar from '../collections/bar/CollectionBar';
import CollectionCardList from '../collections/card/CollectionCardList';

const CollectionIndexPage: React.FC = () => {
  return (
    <MainContainer>
      <PageTitle>Collections</PageTitle>
      <CollectionBar />
      <CollectionCardList />
    </MainContainer>
  );
};

export default CollectionIndexPage;
