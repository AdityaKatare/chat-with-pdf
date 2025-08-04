import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAL7aYMtPIAbwCLwtF1vzL_fXuD5zSNNt8",
  authDomain: "chat-with-pdf-2fd01.firebaseapp.com",
  projectId: "chat-with-pdf-2fd01",
  storageBucket: "chat-with-pdf-2fd01.firebasestorage.app",
  messagingSenderId: "754862345133",
  appId: "1:754862345133:web:6ec020fc6ad2f602542f24",
  measurementId: "G-YXG9EJ1EGX"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};