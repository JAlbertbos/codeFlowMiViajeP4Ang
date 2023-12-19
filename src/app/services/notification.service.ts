// notification.service.ts
import { Injectable } from '@angular/core';
import { initializeFirebaseApp, initializeFirebaseMessaging } from '../firebase-config';
import { onMessage } from 'firebase/messaging';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private messaging;

  constructor() {
    const app = initializeFirebaseApp();
    this.messaging = initializeFirebaseMessaging(app);
    this.setupNotifications();
  }

  setupNotifications() {
    onMessage(this.messaging, (payload) => {
      console.log('Mensaje recibido: ', payload);
      // Aquí puedes manejar la lógica para mostrar la notificación en la aplicación
    });
  }
}
