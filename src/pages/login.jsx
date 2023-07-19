import PropTypes from 'prop-types';
import { googleLogin } from '../utils/firebase';

const Login = ({ setCurrentUser }) => {
	const handleLogin = async () => {
		try {
			const userData = await googleLogin();
			setCurrentUser(userData);
		} catch (error) {
			// Handle errors here
			console.log(error);
		}
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Real-time chat</h1>
					<p className="py-6">Real-time chat made with Firebase,
						React and Tailwind. Login below to see it in action :)
					</p>
					<button
						className="btn btn-primary"
						type="button"
						onClick={handleLogin}
					>
						Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	setCurrentUser: PropTypes.func
};

export default Login;
