import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../consts';

export const LoginForm: React.FC = () => {
  const [login, setLogin] = useState({ username: '', password: '' });
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setLogin((current) => ({ ...current, [name]: value }));

  const [error, setError] = useState('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': PROJECT_ID,
      'User-Name': login.username,
      'User-Secret': login.password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', login.username);
      localStorage.setItem('password', login.password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};
