import PropTypes from 'prop-types';
import { getAuth } from 'firebase/auth';
import UserMessage from '../UserMessage';

const ChatBox = ({ messages }) => {
	const auth = getAuth();
	const user = auth.currentUser;

	return (
		<div className="containerWrap my-5	">
			<div className="chat-box">
				{messages && messages.map(
					message => (
						<UserMessage
							key={message.id}
							sender={message.uid === user.uid}
							message={message.text}
							image={message.photoURL}
						/>
					))}
			</div>
		</div>
	);
};

ChatBox.propTypes = {
	messages: PropTypes.array
};

export default ChatBox;
