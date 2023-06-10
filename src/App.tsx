import { ChatEngine } from 'react-chat-engine';
import './App.css';
import { ChatFeed, LoginForm } from './components';
import { PROJECT_ID } from './consts';

function App() {
  const isLoged = localStorage?.getItem('username');

  return (
    <div className="App">
      {!isLoged ? (
        <LoginForm />
      ) : (
        <ChatEngine
          height="100vh"
          projectID={PROJECT_ID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderChatFeed={(chatFeedProps: any) => (
            <ChatFeed {...chatFeedProps} />
          )}
          onNewMessage={() =>
            new Audio(
              'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
            ).play()
          }
        />
      )}
    </div>
  );
}

export default App;
