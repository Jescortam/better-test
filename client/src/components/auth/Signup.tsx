import FormField from '../FormField';

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form method="post" action="/auth/signup">
        <FormField label="Username" name="username" required />
        <FormField label="Password" name="password" type="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
