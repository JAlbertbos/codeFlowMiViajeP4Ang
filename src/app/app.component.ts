import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    // Inicializar Firebase aquí
    initializeApp(environment.firebase);
  }

  ngOnInit(): void {
    this.requestPermission();
    this.listenForMessages();
  }

  title = 'codeFlow-miViaje';

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: environment.firebase.vpaidKey }).then(
      (currentToken) => {
        if (currentToken) {
          console.log("Token obtenido:", currentToken);
        } else {
          console.log("No se pudo obtener el token.");
        }
      }
    ).catch((err) => {
      console.error("Error al obtener el token:", err);
    });
  }

  listenForMessages() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Mensaje recibido:', payload);
      // Aquí puedes mostrar la notificación o manejar el mensaje según tus necesidades
    });
  }


  showNotification(payload: any) {
    if (Notification.permission === 'granted') {
      const { title, body } = payload.data;
      const notification = new Notification(title, { body });

      notification.onclick = () => {
        // Aquí puedes manejar la acción al hacer clic en la notificación
        console.log('Notificación clicada');
      };
    }
  }

}
