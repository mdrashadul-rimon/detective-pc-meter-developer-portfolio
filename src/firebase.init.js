import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBK190Z5VjwgNNC8GkZ341TH4eFNdLcbZM",
    authDomain: "detective-pc-mitter.firebaseapp.com",
    projectId: "detective-pc-mitter",
    storageBucket: "detective-pc-mitter.appspot.com",
    messagingSenderId: "439788241562",
    appId: "1:439788241562:web:026030becfc74bd0121523"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
