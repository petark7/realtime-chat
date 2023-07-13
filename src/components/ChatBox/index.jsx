import UserMessage from '../UserMessage';

const ChatBox = () => (
	<div className="containerWrap my-10">
		<UserMessage sender={false} />
		<div className="chat chat-end">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg" />
				</div>
			</div>
			<div className="chat-bubble bg-blue-900">It was you who would bring balance to the Force</div>
		</div>
	</div>
);

export default ChatBox;
