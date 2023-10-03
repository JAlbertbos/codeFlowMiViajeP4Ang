import { Component } from '@angular/core';
import { City, tripDays } from '../data/data';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  
  days: City[] = tripDays;
  selectedDay: City | null = null;
  filterCity: string = '';
  selectedFilter: string = 'city'; 
  filterValue: string = '';
  errorMessage: string | null = null;


  // Función para mostrar los detalles del día seleccionado
  showDetail(day: City) {
    this.selectedDay = day;
  }


  // Función para filtrar la búsqueda
  applyFilter() {
    if (this.selectedFilter === 'city') {
      // Buscar la ciudad relacionada con el texto ingresado
      const filteredCity = tripDays.find(day => day.cityName.toLowerCase() === this.filterValue.toLowerCase());
      
      if (filteredCity) {
        // Establecer la ciudad encontrada como día seleccionado
        this.selectedDay = filteredCity;
        this.errorMessage = null;
      } else {
        // Mostrar un mensaje de error si no se encuentra la ciudad
        this.selectedDay = null;
        this.errorMessage = "Ciudad no encontrada. Por favor, revisa el texto.";
      }
    } else {
      // Reiniciar la lista de días y el mensaje de error
      this.days = tripDays;
      this.errorMessage = null;
    }
  }

   // Función para filtrar día seleccionado desde el desplegable
   onDaySelect() {
    const selectedDayNumber = parseInt(this.selectedFilter.replace('day', ''), 10);
    const selectedDay = this.days.find(day => day.dayNumber === selectedDayNumber);
    if (selectedDay) {
      this.showDetail(selectedDay);
    }
  }
    
}
