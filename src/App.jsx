import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { UserAuth } from './context/AuthContext';
import Login from './pages/login';
import ChatRoom from './pages/chat-room';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import './App.css';

const App = () => {
	const { currentUser, setCurrentUser } = UserAuth();
	const [isLoading, setIsLoading] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		setIsLoading(true);
		onAuthStateChanged(auth, user => {
			if (user) {
				setCurrentUser(user);
				setIsLoading(false);
			}

			setIsLoading(false);
		});
	}, []);

	const handleLogout = () => {
		signOut(auth).then(() => {
			setCurrentUser(null);
		}).catch(error => {
			console.log(error);
		});
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} showLogoutButton={Boolean(currentUser)} />
			<Loading isLoading={isLoading}>
				{currentUser ? <ChatRoom user={currentUser} />
					: <Login setCurrentUser={setCurrentUser} />}
			</Loading>
		</>
	);
};

export default App;
