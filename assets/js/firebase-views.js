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
  apiKey: "REAL_API_KEY",
  authDomain: "formaspace-portfolio.firebaseapp.com",
  projectId: "formaspace-portfolio",
  storageBucket: "formaspace-portfolio.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
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
