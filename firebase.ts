import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDvzufsnRJ9XHs3oLDm3jLjCBlx7Mo8lEI",
    authDomain: "dropbox-clone-31be0.firebaseapp.com",
    projectId: "dropbox-clone-31be0",
    storageBucket: "dropbox-clone-31be0.appspot.com",
    messagingSenderId: "283426298593",
    appId: "1:283426298593:web:34d1ea17e0983a2aacf5a0"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };