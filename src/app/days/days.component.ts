import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City, tripDays } from '../data/data';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})

export class DaysComponent {
  dropdownOpen: boolean = false; // Variable para rastrear si el menú desplegable del filtro está abierto
  days: City[] = tripDays; // Arreglo que almacena información sobre los días de viaje
  @Input() selectedDay: City | null = null; // Almacena el día seleccionado
  @Output() daySelected = new EventEmitter<City>();
  filterCity: string = ''; // Almacena el valor del filtro de ciudad
  selectedFilter: string = 'city'; // Almacena el tipo de filtro seleccionado (inicialmente, por ciudad)
  filterValue: string = ''; // Almacena el valor del filtro


  // Método para alternar el estado del menú desplegable del filtro
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  // Función para mostrar los detalles del día seleccionado
  showDetails(day: City) {
    if (this.selectedDay === day) {
      this.selectedDay = null; // Deseleccionar el día si ya está seleccionado
    } else {
      this.selectedDay = day; // Seleccionar el día
    }
  }


  // Función para filtrar la búsqueda
  applyFilter() {
 
  }


    
}
