import React from 'react';
import Stack from '@mui/material/Stack';
import Flashcard from './FlashcardCard';
import flashcards from '../../dbPlaceholder/flashcards';

const FlashcardCardList: React.FC = () => {
  const renderFlashcards = () => {
    return flashcards.map((flashcard) => {
      return <Flashcard key={flashcard._id} flashcard={flashcard} />;
    });
  };

  return <Stack spacing={2}>{renderFlashcards()}</Stack>;
};

export default FlashcardCardList;
