import { useRef } from 'react';
import { collection, query, orderBy, limit, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatBox from '../components/ChatBox';
import SendMessage from '../components/SendMessage';
import ScrollToBottom from '../components/ScrollToBottom';

const firebaseConfig = {
	apiKey: 'AIzaSyA1FHcDltkq8RaUUsMyUDPwaW_R4E0PT7I',
	authDomain: 'realtime-chat-92832.firebaseapp.com',
	projectId: 'realtime-chat-92832',
	storageBucket: 'realtime-chat-92832.appspot.com',
	messagingSenderId: '348471459951',
	appId: '1:348471459951:web:394fe0713508b46ac94d9a',
	measurementId: 'G-FVKC0FSE47'
};

const ChatRoom = () => {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const messagesRef = collection(db, 'messages');
	const q = query(messagesRef, orderBy('createdAt'), limit(25));

	const [messages] = useCollectionData(q, { idField: 'id' });
	const scrollToBottomRef = useRef(null);

	return (
		<>
			<ChatBox messages={messages} />
			<SendMessage />
		</>
	);
};

export default ChatRoom;
