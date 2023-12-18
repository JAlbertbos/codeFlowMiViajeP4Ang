import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


  enableProdMode();


// Inicializa aplicación de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuJ7PBsxr6KHZRFw3QzYqEVAXYy0vyB34",
  authDomain: "codeflowmiviajep4ang.firebaseapp.com",
  projectId: "codeflowmiviajep4ang",
  storageBucket: "codeflowmiviajep4ang.appspot.com",
  messagingSenderId: "78549437438",
  appId: "1:78549437438:web:f6480ff9dbe16444990eaf",
  measurementId: "G-1EJK8VSF1S"
};

const initializeFirebase = async () => {
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  return { app, firestore };
};

initializeFirebase().then(({  }) => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});

  