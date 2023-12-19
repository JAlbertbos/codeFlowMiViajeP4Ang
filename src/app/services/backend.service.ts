// backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = 'https://your-backend-url.com'; // URL de tu backend

  constructor(private http: HttpClient) {}

  sendNotificationToDevice(deviceToken: string, payload: any) {
    // Lógica para enviar la notificación al token específico del dispositivo a través de tu backend
    // Puedes usar HttpClient para hacer la solicitud POST al servidor
    return this.http.post(`${this.apiUrl}/send-notification`, { token: deviceToken, payload });
  }
}
