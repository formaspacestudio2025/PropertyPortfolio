<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "REAL_API_KEY",
  authDomain: "REAL_DOMAIN",
  projectId: "REAL_PROJECT_ID",
  storageBucket: "REAL_BUCKET",
  messagingSenderId: "REAL_SENDER_ID",
  appId: "REAL_APP_ID"
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

  const el = document.getElementById(elementId);
  if (!el) return;

  el.innerText = snap.exists() ? snap.data().count : "0";
};
</script>
