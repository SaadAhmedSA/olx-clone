import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfg6Yn5PTdjV42Dxjj-FNBloPJSKWjw0k",
  authDomain: "olx-clone-74086.firebaseapp.com",
  projectId: "olx-clone-74086",
  storageBucket: "olx-clone-74086.firebasestorage.app",
  messagingSenderId: "911343428106",
  appId: "1:911343428106:web:3cdd010d9e8df8ba9275f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const storage = 