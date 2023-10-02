import { Component } from '@angular/core';
import { City, tripDays } from '../data/data';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  days: City[] = tripDays;

  selectedDay: City | null = null;

  filterCity: string = ''; // Inicializado con una cadena vacía
  selectedFilter: string = 'city'; 
  filterValue: string = '';

  // Función para mostrar los detalles del día seleccionado
  showDetail(day: City) {
    this.selectedDay = day;
  }
  applyFilter() {
 
  }

  
}
