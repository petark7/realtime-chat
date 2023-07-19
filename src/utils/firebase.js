import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const messagesRef = collection(db, 'messages');

const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		const user = result.user;
		return user;
	} catch (error) {
		// Handle Errors here.
		const errorMessage = error.message;
		console.log(errorMessage);
		throw error; // Optional: Re-throw the error to handle it in the caller function
	}
};

export const createMessage = async text => {
	try {
		const user = await auth.currentUser;
		if (user) {
			const { uid, photoURL } = user;
			await addDoc(messagesRef, {
				uid,
				photoURL,
				text,
				createdAt: new Date()
			});
		} else {
			console.log('User not logged in.');
		}
	} catch (error) {
		console.error('Error creating message:', error);
	}
};

