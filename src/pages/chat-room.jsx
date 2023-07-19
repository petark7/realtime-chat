import { useRef } from 'react';
import { collection, query, orderBy, limit, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatBox from '../components/ChatBox';
import SendMessage from '../components/SendMessage';
import { firebaseConfig } from '../firebaseConfig';

const ChatRoom = () => {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const messagesRef = collection(db, 'messages');
	const q = query(messagesRef, orderBy('createdAt'), limit(100));

	const [messages] = useCollectionData(q, { idField: 'id' });
	const scrollToBottomRef = useRef(null);

	const scrollToBottom = () => {
		scrollToBottomRef.current.scrollIntoView();
	};

	return (
		<>
			<ChatBox scrollToBottom={scrollToBottom} scrollToBottomRef={scrollToBottomRef} messages={messages} />
			<SendMessage scrollToBottom={scrollToBottom} />
		</>
	);
};

export default ChatRoom;
