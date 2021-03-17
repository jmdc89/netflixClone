import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyA4dlucPpRw4taoHrTroDhenic_DOy4fhI",
    authDomain: "netflixclone-e5769.firebaseapp.com",
    projectId: "netflixclone-e5769",
    storageBucket: "netflixclone-e5769.appspot.com",
    messagingSenderId: "891437577755",
    appId: "1:891437577755:web:5f8fd2c285c2ae1487eabe"
  };

  const firebase = Firebase.initializeApp(config);

  export { firebase };