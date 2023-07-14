import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/login';
import ChatRoom from './pages/chat-room';
import './App.css';

const App = () => {
	const [user, setUser] = useState(null);

	return (
		<>
			<Navbar />
			{user ? <ChatRoom user={user} /> : <Login setUser={setUser} user={user} />}
		</>
	);
};

export default App;
