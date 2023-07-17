import PropTypes from 'prop-types';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { UserAuth } from '../context/AuthContext';

const firebaseConfig = {
	apiKey: 'AIzaSyA1FHcDltkq8RaUUsMyUDPwaW_R4E0PT7I',
	authDomain: 'realtime-chat-92832.firebaseapp.com',
	projectId: 'realtime-chat-92832',
	storageBucket: 'realtime-chat-92832.appspot.com',
	messagingSenderId: '348471459951',
	appId: '1:348471459951:web:394fe0713508b46ac94d9a',
	measurementId: 'G-FVKC0FSE47'
};

const Login = () => {
	const provider = new GoogleAuthProvider();
	const app = initializeApp(firebaseConfig);
	const { currentUser, setCurrentUser } = UserAuth();

	console.log(currentUser);
	const auth = getAuth();
	const handleLogin = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				// SetUser(user);
				setCurrentUser(user);
			// IdP data available using getAdditionalUserInfo(result)
			}).catch(error => {
			// Handle Errors here.
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Real-time chat</h1>
					<p className="py-6">Real-time chat made with Firebase, React and Tailwind. Login below to see it in action :)</p>
					<button className="btn btn-primary" type="button" onClick={handleLogin}>Login with Google</button>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	setUser: PropTypes.func
};

export default Login;
