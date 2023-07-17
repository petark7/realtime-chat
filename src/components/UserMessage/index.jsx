import PropTypes from 'prop-types';

const UserMessage = ({ sender, message, image }) => {
	const position = sender ? 'chat-end' : 'chat-start';
	const color = sender ? 'bg-blue-900' : 'bg-gray-700';

	return (
		<div className={`chat ${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={image} />
				</div>
			</div>
			<div className={`chat-bubble ${color} text-white`}>{message}</div>
		</div>
	);
};

UserMessage.propTypes = {
	image: PropTypes.any,
	message: PropTypes.any,
	sender: PropTypes.any
};

export default UserMessage;
