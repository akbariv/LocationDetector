import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnPkDEpJUrOCWXgeuD_QAYxSTuOKTzbG0',
  authDomain: 'locationdetector-53bb3.firebaseapp.com',
  databaseURL: 'https://locationdetector-53bb3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'locationdetector-53bb3',
  storageBucket: 'locationdetector-53bb3.appspot.com',
  messagingSenderId: '44358955215',
  appId: '1:44358955215:web:bf229fba6aed29609cc7ba',
  measurementId: 'G-N78MCD5SM1',
};

// Initialize Firebase only if it hasn't been initialized already
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the existing app
}

// Get a reference to the database service
const db = getDatabase(app);

export { db };
