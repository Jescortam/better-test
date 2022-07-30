import React from 'react';
import FormField from './FormField';

function App() {
  return (
    <div>
      <form method="post" action="/flashcards">
        <FormField label="Body" id="flashcard-body-input" name="body" />
        <FormField label="Answer" id="flashcard-answer-input" name="answer" />
        <FormField label="Author" id="flashcard-author-input" name="author" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
