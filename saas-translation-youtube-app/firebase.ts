import{ getApp, getApps, initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMwZXazuxosFU8-iMjow7hwdgB4UEAmDQ",
    authDomain: "saas-translator-app-yt-73995.firebaseapp.com",
    projectId: "saas-translator-app-yt-73995",
    storageBucket: "saas-translator-app-yt-73995.appspot.com",
    messagingSenderId: "402413478218",
    appId: "1:402413478218:web:3a962892ac877aa86ee1b3"
  };

  const app = getApps().length? getApp(): initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const functions = getFunctions(app);

  export{ db, auth, functions};
