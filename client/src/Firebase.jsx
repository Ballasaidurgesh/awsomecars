import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7EKCpCULpynuptMxDLw82F-V5EFUWEpo",
  authDomain: "awsomecars-auth.firebaseapp.com",
  projectId: "awsomecars-auth",
  storageBucket: "awsomecars-auth.appspot.com",
  messagingSenderId: "369609756003",
  appId: "1:369609756003:web:07f067f305c27f72121756",
  measurementId: "G-NTMY97N6DN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
