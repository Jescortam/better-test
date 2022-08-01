import FormField from '../FormField';

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <form method="post" action="/auth/login">
        <FormField label="Username" name="username" required />
        <FormField label="Password" name="password" type="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
