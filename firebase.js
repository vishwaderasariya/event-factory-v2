import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlMCmPx42xx-E5nUxkoHetaEKMMPz4re0",
  authDomain: "event-factory-a70dc.firebaseapp.com",
  projectId: "event-factory-a70dc",
  storageBucket: "event-factory-a70dc.appspot.com",
  messagingSenderId: "324510463313",
  appId: "1:324510463313:web:ea25f1b48293bf58f64f70",
  measurementId: "G-7ZMWLB6N7Y",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
