import { ChatEngine } from 'react-chat-engine';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

import './App.css';

const projectID = 'c293b89d-a099-49a2-b475-2969904f3c6a';

const Component_to_Return = () => {

}

const App = () => {
  //if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={(!localStorage.getItem('username')) ? <LoginForm /> : <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />} />
      <Route path="/signup" element={<SignUpForm/>}/>


    </Routes>
    </BrowserRouter>

  );
};

// infinite scroll, logout, more customizations...

export default App;
