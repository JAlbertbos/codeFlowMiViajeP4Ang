// backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = 'https://localhost:4200';

  constructor(private http: HttpClient) {}

  sendTokenToServer(token: string) {
    return this.http.post(`${this.apiUrl}/store-token`, { token });
  }
}
