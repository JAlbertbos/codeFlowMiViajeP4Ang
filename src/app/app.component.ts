import { Component } from '@angular/core';
import { addUserData } from '../firebase-config/firebase-init'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeFlow-miViaje';
 
  constructor() {
    // función de inicialización de Firebase
    addUserData();
  }
}
