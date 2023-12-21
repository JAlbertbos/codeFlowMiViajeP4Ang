import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { getFCMToken, initializeFirebaseApp, initializeFirebaseMessaging } from './firebase-config';
import { FirebaseApp } from 'firebase/app';

enableProdMode();

initializeFirebaseApp()
  .then((app: FirebaseApp) => {
    const messaging = initializeFirebaseMessaging(app);
    return getFCMToken(messaging);
  })
  .then((token) => {
    // Aquí puedes enviar el token a tu backend si es necesario
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  })
  .catch((error) => {
    console.error('Error inicializando Firebase o al obtener el token FCM:', error);
  });
