import { FirebaseApp, initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCuJ7PBsxr6KHZRFw3QzYqEVAXYy0vyB34",
  authDomain: "codeflowmiviajep4ang.firebaseapp.com",
  projectId: "codeflowmiviajep4ang",
  storageBucket: "codeflowmiviajep4ang.appspot.com",
  messagingSenderId: "78549437438",
  appId: "1:78549437438:web:f6480ff9dbe16444990eaf",
  measurementId: "G-1EJK8VSF1S"
};

export const initializeFirebaseApp = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export const initializeFirebaseMessaging = (app: FirebaseApp) => {
  const messaging = getMessaging(app);
  return messaging;
};
