import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { City, tripDays } from '../data/data';
import { CodeFlowMiViajeP2Service } from 'src/app/services/code-flow-mi-viaje-p2.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cities',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit{
  dropdownOpen: boolean = false; // Variable para rastrear si el menú desplegable del filtro está abierto
  days: City[] = tripDays; // Arreglo que almacena información sobre los días de viaje
  filteredDays: City[] = tripDays;
  @Input() selectedDay: City | null = null; // Almacena el día seleccionado
  @Output() daySelected = new EventEmitter<City>();
  filterValue: string = ''; // Almacena el valor del filtro
  selectedDays: number[] = [];
  selectedCities: string[] = [];

    // Verifica si un día está seleccionado
  isDaySelected(dayNumber: number): boolean {
    return this.selectedDays.includes(dayNumber);
  }

    // Alterna la selección de un día
  toggleDaySelection(dayNumber: number) {
    if (this.selectedDays.includes(dayNumber)) {
      this.selectedDays = this.selectedDays.filter((day) => day !== dayNumber);
    } else {
      this.selectedDays.push(dayNumber);
    }
  }

    // Verifica si una ciudad está seleccionada
  isCitySelected(cityName: string): boolean {
    return this.selectedCities.includes(cityName);
  }

    // Alterna la selección de una ciudad
  toggleCitySelection(cityName: string) {
    if (this.selectedCities.includes(cityName)) {
      this.selectedCities = this.selectedCities.filter((city) => city !== cityName);
    } else {
      this.selectedCities.push(cityName);
    }
  }
    // Método para alternar el estado del menú desplegable del filtro
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

    // Método para cerrar el menú desplegable al hacer clic en el fondo oscuro
  closeDropdown() {
    this.dropdownOpen = false;
  }

    // Función para mostrar los detalles del día seleccionado
  showDetails(day: City) {
    if (this.selectedDay === day) {
      this.selectedDay = null;
    } else {
      this.selectedDay = day; 
    }
  }

    // Borra los días seleccionados y ciudades seleccionadas, restableciendo los filtros
  resetFilters() {
    this.selectedDays = [];
    this.selectedCities = [];
    this.filteredDays = this.days; // Restablecer los días
  }
    
   // Función para filtrar la búsqueda
  applyFilters() {
    this.filteredDays = this.days.filter((day) => {
      const isSelectedDay = this.selectedDays.includes(day.dayNumber);
      const isSelectedCity = this.selectedCities.includes(day.cityName);
      return isSelectedDay || isSelectedCity;
    });
    if (this.selectedDays.length === 0 && this.selectedCities.length === 0) {
      // Si no se ha seleccionado ningún día ni ciudad, mostrar todos los días
      this.resetFilters();
    }
  }

    formulario: FormGroup;
  
    constructor(
      private codeFlowMiViajeP2Service: CodeFlowMiViajeP2Service
    ) {
      this.formulario = new FormGroup({
        name: new FormControl(),
        day: new FormControl(),
        activities: new FormControl(),
        video: new FormControl(),
      
      })
    }
  
    ngOnInit(): void {
    }
  
    async onSubmit() {
      console.log(this.formulario.value)
      const response = await this.codeFlowMiViajeP2Service.addCity(this.formulario.value);
      console.log('Ciudad agregada con éxito', response);
      this.formulario.reset();
      console.log(response);
    }
  
    onVideoSelected(event: Event) {
      const inputElement = event.target as HTMLInputElement;
    
      if (inputElement && inputElement.files) {
        const selectedFile = inputElement.files[0];
    
        if (selectedFile) {
          // Realiza acciones con el archivo seleccionado
          console.log('Video seleccionado:', selectedFile);
        } else {
          console.error('No se seleccionó ningún archivo.');
        }
      } else {
        console.error('El elemento de entrada no es válido o no tiene archivos.');
      }
    }
  }
  
  
  
  
  


  


