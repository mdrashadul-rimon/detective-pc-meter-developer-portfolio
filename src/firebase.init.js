import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD8BziXDdEyhV1IPWdKUA4njPOxtdn33Fw",
    authDomain: "tech-geeks-565cc.firebaseapp.com",
    projectId: "tech-geeks-565cc",
    storageBucket: "tech-geeks-565cc.appspot.com",
    messagingSenderId: "710474709993",
    appId: "1:710474709993:web:077519a3e0f429fb752978"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
