// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrDGnIhEot0SDEva0JYlM8j2I6FQDLVnY',
  authDomain: 'portfolio-519ae.firebaseapp.com',
  projectId: 'portfolio-519ae',
  storageBucket: 'portfolio-519ae.appspot.com',
  messagingSenderId: '150439418320',
  appId: '1:150439418320:web:9eb9cd93b6c16d6e7481d5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Connect to Emulators
if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}

export { app, db };
