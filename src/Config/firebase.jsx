import { initializeApp } from "firebase/app";
import { getAuth , setPersistence, browserSessionPersistence } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDM8Uzz2pFZrXRqC-ssvTwvKP-Gb2C0kx8",
  authDomain: "nft-project-ca59c.firebaseapp.com",
  projectId: "nft-project-ca59c",
  storageBucket: "nft-project-ca59c.appspot.com",
  messagingSenderId: "231079784322",
  appId: "1:231079784322:web:5fbd451b301370a16aa99b",
  measurementId: "G-07J1JH47LE"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Session persistence successfully set
  })
  .catch((error) => {
    console.error('Error setting session persistence:', error);
  });
