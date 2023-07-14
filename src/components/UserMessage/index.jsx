import PropTypes from 'prop-types';

const UserMessage = ({ sender, message }) => {
	let position = 'start';
	let color = '';

	if (sender) {
		position = 'end';
		color = 'bg-blue-900';
	}

	return (
		<div className={`chat chat-${position}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg" />
				</div>
			</div>
			<div className={`chat-bubble ${color} text-white`}>{message}</div>
		</div>
	);
};

UserMessage.propTypes = {
	message: PropTypes.any,
	sender: PropTypes.any
};

export default UserMessage;
