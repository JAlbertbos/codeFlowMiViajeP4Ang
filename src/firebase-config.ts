import { FirebaseApp, initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCuJ7PBsxr6KHZRFw3QzYqEVAXYy0vyB34",
  authDomain: "codeflowmiviajep4ang.firebaseapp.com",
  projectId: "codeflowmiviajep4ang",
  storageBucket: "codeflowmiviajep4ang.appspot.com",
  messagingSenderId: "78549437438",
  appId: "1:78549437438:web:f6480ff9dbe16444990eaf",
  measurementId: "G-1EJK8VSF1S"
};

export const initializeFirebaseApp = (): Promise<FirebaseApp> => {
  const app: FirebaseApp = initializeApp(firebaseConfig);
  return Promise.resolve(app);
};

export const initializeFirebaseMessaging = (app: FirebaseApp) => {
  const messaging = getMessaging(app);
  return messaging;
};

export const getFCMToken = async (messaging: any): Promise<string | null> => {
  try {
    const currentToken = await getToken(messaging);
    if (currentToken) {
      console.log('Token FCM:', currentToken);
      return currentToken;
    } else {
      console.error('No se ha obtenido el token FCM.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el token FCM:', error);
    return null;
  }
};
