// notification.service.ts
import { Injectable } from '@angular/core';
import { initializeFirebaseApp, initializeFirebaseMessaging, getFCMToken } from '../../firebase-config';
import { BackendService } from './backend.service';
import { FirebaseApp } from 'firebase/app';


@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private messaging : any;

  constructor(private backendService: BackendService) {
    this.setupNotifications();
    this.initFirebase();
  }

  async initFirebase() {
    try {
      const app: FirebaseApp = await initializeFirebaseApp();
      this.messaging = initializeFirebaseMessaging(app);
      const token = await getFCMToken(this.messaging);
      if (token) {
        this.backendService.sendTokenToServer(token);
        console.log('Token FCM:', token);
      } else {
        console.error('No se ha obtenido el token FCM.');
      }
    } catch (error) {
      console.error('Error al inicializar Firebase:', error);
    }
  }


  setupNotifications() {
   
      // Aquí puedes manejar la lógica para mostrar la notificación en la aplicación
   
  }
}
