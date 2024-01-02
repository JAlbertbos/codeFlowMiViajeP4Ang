import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from 'src/environments/environment';
import { Firestore, doc, getFirestore, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private firestore: Firestore) {
    // Inicializar Firebase aquí
    initializeApp(environment.firebase);
  }

  ngOnInit(): void {
    this.requestPermission();
    this.listenForMessages();
  }

  title = 'codeFlow-miViaje';

  async requestPermission() {
    const messaging = getMessaging();
    const currentToken = await getToken(messaging, { vapidKey: environment.firebase.vpaidKey });

    if (currentToken) {
      console.log("Token obtenido:", currentToken);
      this.sendTokenToFirestore(currentToken);
    } else {
      console.log("No se pudo obtener el token.");
    }
  }

  async sendTokenToFirestore(token: string) {
    const db = getFirestore();
    const userId = 'ID_DEL_USUARIO_ACTUAL';

    try {
      await setDoc(doc(db, 'tokens', userId), { token });
      console.log('Token guardado en Firestore');
    } catch (error) {
      console.error('Error al guardar el token en Firestore:', error);
    }
  }

  listenForMessages() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Mensaje recibido:', payload);
      this.showNotification(payload);
    });
  }


  showNotification(payload: any) {
    if (Notification.permission === 'granted') {
      const notification = new Notification("Se ha realizado el cambio correctamente");

      notification.onclick = () => {
        console.log('Notificación clicada');
      };
    }
  }

}