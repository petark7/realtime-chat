import PropTypes from 'prop-types';
import { getAuth } from 'firebase/auth';
import { useRef, useState } from 'react';
import UserMessage from '../UserMessage';
import ScrollToBottom from '../ScrollToBottom';

const ChatBox = ({ messages, scrollToBottomRef }) => {
	const auth = getAuth();
	const user = auth.currentUser;
	const [isVisible, setIsVisible] = useState(true);

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
			<div ref={scrollToBottomRef} />
			{isVisible && <ScrollToBottom scrollToBottomRef={scrollToBottomRef} setIsVisible={setIsVisible} />}
		</div>
	);
};

ChatBox.propTypes = {
	messages: PropTypes.array
};

export default ChatBox;
