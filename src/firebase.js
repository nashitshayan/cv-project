import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDoy7e2_nMi6Qzkbzz6aU7sxpljjES8NDU',
	authDomain: 'cv-maker-78b01.firebaseapp.com',
	projectId: 'cv-maker-78b01',
	storageBucket: 'cv-maker-78b01.appspot.com',
	messagingSenderId: '169946883659',
	appId: '1:169946883659:web:84581935d12621c168cfce',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
