import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, type Firestore } from "firebase/firestore";

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

function missingKeys() {
  return Object.entries(firebaseConfig)
    .filter(([key, value]) => key !== "measurementId" && !value)
    .map(([key]) => key);
}

export function assertFirebaseConfigured() {
  const missing = missingKeys();
  if (missing.length) {
    throw new Error(`Firebase 尚未設定：缺少 ${missing.join(", ")}`);
  }
}

export function isFirebaseConfigured() {
  return missingKeys().length === 0;
}

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function firebaseApp() {
  assertFirebaseConfigured();
  app ??= getApps()[0] ?? initializeApp(firebaseConfig);
  return app;
}

export function firebaseAuth() {
  return getAuth(firebaseApp());
}

export function firebaseDb() {
  db ??= initializeFirestore(firebaseApp(), { ignoreUndefinedProperties: true });
  return db;
}
