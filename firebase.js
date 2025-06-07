
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCP-Ah46NKGyxmf6TtD1G-jsCHMgtLLnJc",
  authDomain: "database-groep6-careerlaunch.firebaseapp.com",
  projectId: "database-groep6-careerlaunch",
  storageBucket: "database-groep6-careerlaunch.firebasestorage.app",
  messagingSenderId: "321019186860",
  appId: "1:321019186860:web:c1eefda230bc01265b1909"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
