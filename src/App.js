import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="f07d6c2d-bd33-4513-8d92-35a75bcda7bd"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
        />
    )
}

export default App;