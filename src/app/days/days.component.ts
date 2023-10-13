import { Component } from '@angular/core';
import { City, tripDays } from '../data/data';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  dropdownOpen: boolean = false;
  days: City[] = tripDays;
  selectedDay: City | null = null;
  filterCity: string = '';
  selectedFilter: string = 'city'; 
  filterValue: string = '';

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  // Función para mostrar los detalles del día seleccionado
  showDetail(day: City) {
    this.selectedDay = day;
  }

  // Función para filtrar
  applyFilter() {
 
  }


    
}
