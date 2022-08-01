import FormField from '../FormField';

const FlashcardCreate = () => {
  return (
    <div>
      <h1>Create Flashcard</h1>
      <form method="post" action="/flashcards">
        <FormField label="Body" name="body" required />
        <FormField label="Answer" name="answer" required />
        <FormField label="Author" name="author" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FlashcardCreate;
