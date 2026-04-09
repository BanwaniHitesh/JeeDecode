import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHaI49QnrLv6KmZnNeNQXDe4FxtV3aVZM",
  authDomain: "jeedecode-89f1e.firebaseapp.com",
  projectId: "jeedecode-89f1e",
  storageBucket: "jeedecode-89f1e.firebasestorage.app",
  messagingSenderId: "776026613055",
  appId: "1:776026613055:web:c4328676eaab202a2c1f8a",
  measurementId: "G-B7S30FS0RM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);