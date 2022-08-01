import React from 'react';
import FormField from './FormField';

function App() {
  return (
    <div>
      <h1>SIGN UP</h1>
      <form method="post" action="/auth/signup">
        <FormField
          label="Username"
          id="login-username-input"
          name="username"
          required
        />
        <FormField
          label="Password"
          id="login-password-input"
          name="password"
          type="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <h1>LOG IN</h1>
      <form method="post" action="/auth/login">
        <FormField
          label="Username"
          id="login-username-input"
          name="username"
          required
        />
        <FormField
          label="Password"
          id="login-password-input"
          name="password"
          type="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <form method="post" action="/flashcards">
        <FormField
          label="Body"
          id="flashcard-body-input"
          name="body"
          required
        />
        <FormField
          label="Answer"
          id="flashcard-answer-input"
          name="answer"
          required
        />
        <FormField
          label="Author"
          id="flashcard-author-input"
          name="author"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
