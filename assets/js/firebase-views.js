import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWJiAzdeKwSBDBztdZ8L7vrLEsffZNvHE",
    authDomain: "formaspace-portfolio.firebaseapp.com",
    projectId: "formaspace-portfolio",
    storageBucket: "formaspace-portfolio.firebasestorage.app",
    messagingSenderId: "80252146548",
    appId: "1:80252146548:web:ced8d706e151f0f3559221",
    measurementId: "G-9E3CEN5PZ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.countView = async (tourId) => {
  const ref = doc(db, "views", tourId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    await updateDoc(ref, { count: increment(1) });
  } else {
    await setDoc(ref, { count: 1 });
  }
};

window.getViews = async (tourId, elementId) => {
  const ref = doc(db, "views", tourId);
  const snap = await getDoc(ref);

  document.getElementById(elementId).innerText =
    snap.exists() ? snap.data().count : 0;
};
