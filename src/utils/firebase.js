import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyA1FHcDltkq8RaUUsMyUDPwaW_R4E0PT7I',
	authDomain: 'realtime-chat-92832.firebaseapp.com',
	projectId: 'realtime-chat-92832',
	storageBucket: 'realtime-chat-92832.appspot.com',
	messagingSenderId: '348471459951',
	appId: '1:348471459951:web:394fe0713508b46ac94d9a',
	measurementId: 'G-FVKC0FSE47'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const user = auth.currentUser;
const uid = user === null ? null : user.uid;
const photoURL = user === null ? null : user.photoURL;

const messagesRef = collection(db, 'messages');

export const createMessage = async text => {
	try {
		const user = await auth.currentUser;
		if (user) {
			const { uid, photoURL } = user;
			const docRef = await addDoc(messagesRef, {
				uid,
				photoURL,
				text,
				createdAt: new Date()
			});
			console.log('Message created successfully:', docRef.id);
		} else {
			console.log('User not logged in.');
		}
	} catch (error) {
		console.error('Error creating message:', error);
	}
};

