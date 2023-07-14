import { getAuth } from 'firebase/auth';
import UserMessage from '../UserMessage';

const ChatBox = ({ messages }) => {
	const auth = getAuth();
	const user = auth.currentUser;

	return (
		<div className="containerWrap my-10	">
			<div className="chat-box">
				{messages && messages.map(
					message => (
						<UserMessage
							key={message.id}
							sender={message.uid === user.uid}
							message={message.text}
						/>
					))}
			</div>
		</div>
	);
};

export default ChatBox;
