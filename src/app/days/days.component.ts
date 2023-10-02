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
  filterCity: string = ''; // Inicializado con una cadena vacía
  selectedFilter: string = 'city'; 
  filterValue: string = '';


  applyFilter() {
 
  }

  
}
