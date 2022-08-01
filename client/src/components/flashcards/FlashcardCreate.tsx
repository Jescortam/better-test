import FormField from '../FormField';

const FlashcardCreate = () => {
  return (
    <div>
      <h1>Create Flashcard</h1>
      <form method="post" action="/api/flashcards">
        <FormField label="Body" name="body" />
        <FormField label="Answer" name="answer" />
        <FormField label="Author" name="author" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FlashcardCreate;
