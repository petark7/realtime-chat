import { getAuth, signOut } from 'firebase/auth';
import { UserAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/login';
import ChatRoom from './pages/chat-room';
import './App.css';

const App = () => {
	const { currentUser, setCurrentUser } = UserAuth();

	const auth = getAuth();
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
			{currentUser ? <ChatRoom user={currentUser} />
				: <Login setCurrentUser={setCurrentUser} />}
		</>
	);
};

export default App;
