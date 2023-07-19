import { useRef } from 'react';
import { createMessage } from '../../utils/firebase';

const SendMessage = ({ scrollToBottom }) => {
	const messageField = useRef();
	const handleSend = event => {
		event.preventDefault();
		createMessage(messageField.current.value);
		messageField.current.value = '';
		scrollToBottom('smooth');
	};

	return (
		<div className="bg-gray-600 fixed bottom-0 w-full py-5 shadow-lg">
			<form className="containerWrap flex">
				<input ref={messageField} className="input w-full rounded-r-none bg-gray-200 text-black shadow-lg" type="text" />
				<button
					className="w-auto px-6 bg-blue-600 rounded-r-lg text-white"
					onClick={handleSend}
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default SendMessage;
