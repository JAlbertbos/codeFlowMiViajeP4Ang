import { Component } from '@angular/core';
import { Day, tripDays } from '../data/data';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  days: Day[] = tripDays;

  filterDay: number = 0; // Inicializado con un valor predeterminado
  filterCity: string = ''; // Inicializado con una cadena vacía

  // Resto del código
}
