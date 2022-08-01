import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axios.post('/api/auth/login', data);
    if (res.status !== 200) {
      navigate('/auth/login');
    }
    navigate('/');
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username', { required: 'This is a required field.' })}
          placeholder="username"
        />
        <input
          {...register('password', { required: 'This is a required field.' })}
          placeholder="password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
