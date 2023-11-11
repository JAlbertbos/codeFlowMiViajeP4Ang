import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CodeFlowMiViajeP2Service } from 'src/app/services/code-flow-mi-viaje-p2.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import City from '../interfaces/city.interface';


@Component({
  selector: 'app-cities',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit{
  //dropdownOpen: boolean = false; // Variable para rastrear si el menú desplegable del filtro está abierto
  //days: City[] = tripDays; // Arreglo que almacena información sobre los días de viaje
  //filteredDays: City[] = tripDays;
  //@Input() selectedDay: City | null = null; // Almacena el día seleccionado
  //@Output() daySelected = new EventEmitter<City>();
  //filterValue: string = ''; // Almacena el valor del filtro
  //selectedDays: number[] = [];
  //selectedCities: string[] = [];

    // Verifica si un día está seleccionado
 /*  isDaySelected(dayNumber: number): boolean {
    return this.selectedDays.includes(dayNumber);
  } */

    // Alterna la selección de un día
 /*  toggleDaySelection(dayNumber: number) {
    if (this.selectedDays.includes(dayNumber)) {
      this.selectedDays = this.selectedDays.filter((day) => day !== dayNumber);
    } else {
      this.selectedDays.push(dayNumber);
    }
  } */

    // Verifica si una ciudad está seleccionada
  /* isCitySelected(cityName: string): boolean {
    return this.selectedCities.includes(cityName);
  } */

    // Alterna la selección de una ciudad
  /* toggleCitySelection(cityName: string) {
    if (this.selectedCities.includes(cityName)) {
      this.selectedCities = this.selectedCities.filter((city) => city !== cityName);
    } else {
      this.selectedCities.push(cityName);
    }
  } */
    // Método para alternar el estado del menú desplegable del filtro
  /* toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  } */

    // Método para cerrar el menú desplegable al hacer clic en el fondo oscuro
 /*  closeDropdown() {
    this.dropdownOpen = false;
  } */

    // Función para mostrar los detalles del día seleccionado
 /*  showDetails(day: City) {
    if (this.selectedDay === day) {
      this.selectedDay = null;
    } else {
      this.selectedDay = day; 
    }
  } */

    // Borra los días seleccionados y ciudades seleccionadas, restableciendo los filtros
 /*  resetFilters() {
    this.selectedDays = [];
    this.selectedCities = [];
    this.filteredDays = this.days; // Restablecer los días
  } */
    
   // Función para filtrar la búsqueda
 /*  applyFilters() {
    this.filteredDays = this.days.filter((day) => {
      const isSelectedDay = this.selectedDays.includes(day.dayNumber);
      const isSelectedCity = this.selectedCities.includes(day.cityName);
      return isSelectedDay || isSelectedCity;
    });
    if (this.selectedDays.length === 0 && this.selectedCities.length === 0) {
      // Si no se ha seleccionado ningún día ni ciudad, mostrar todos los días
      this.resetFilters();
    }
  } */
  showErrorMessage: boolean = false;
  dropdownOpen: boolean = false;

  formulario: FormGroup;
  cities: City[] = [];
  newCity: City = {
    name: '',
    day: 0,
    description: '',
    accomodation: '',
    activities: [],
    video: null,
  };

  constructor(
    private codeFlowMiViajeP2Service: CodeFlowMiViajeP2Service,
    private fb: FormBuilder,
  ) {
    this.formulario = this.fb.group({
      name: [''],
      day: [''],
      description: [''],
      accomodation: [''],
      activities: [],
      video: [null],
    });
  }

  async ngOnInit() {
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe((cities) => {
      this.cities = cities;
    });
  }

  async refreshCityList() {
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe((cities) => {
      this.cities = cities;
    });
  }
  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.newCity.video = file;
  }

  onSubmit() {
  const nameControl = this.formulario.get('name');
  const dayControl = this.formulario.get('day');
  const descriptionControl = this.formulario.get('description');
  const accomodationControl = this.formulario.get('accomodation');
  const activitiesControl = this.formulario.get('activities');

  // Verifica si los campos obligatorios están vacíos
  if (
    !nameControl?.value ||
    !dayControl?.value ||
    !descriptionControl?.value ||
    !accomodationControl?.value ||
    !activitiesControl?.value
  ) {
    // Muestra el mensaje de error
    this.showErrorMessage = true;
    return; // No envíes el formulario si falta información obligatoria
  }

    if (this.formulario.valid) {
      // El formulario es válido, procede a enviar los datos
      const activitiesValue = this.formulario.get('activities')?.value;
      const activities = activitiesValue ? activitiesValue.split(',') : [];
  
      const newCity: City = {
        name: this.formulario.get('name')?.value || '',
        day: this.formulario.get('day')?.value || 0,
        description: this.formulario.get('description')?.value || '',
        accomodation: this.formulario.get('accomodation')?.value || '',
        activities: activities,
        video: this.formulario.get('video')?.value || null,
      };
  
      this.codeFlowMiViajeP2Service.addCity(newCity).then((response) => {
        if (response) {
          this.refreshCityList();
          this.formulario.reset();
          this.showErrorMessage = false;
        } else {
          // Realiza alguna acción de validación adicional si es necesario
          console.error('Error al guardar la ciudad.');
        }
      });
    } else {
      // El formulario no es válido, muestra un mensaje de error o realiza alguna acción de validación adicional
      console.error('El formulario contiene errores o campos obligatorios no están llenos.');
    }
  }
  
  

  onVideoSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files) {
      const selectedFile = inputElement.files[0];

      if (selectedFile) {
        console.log('Video seleccionado:', selectedFile);
      } else {
        console.error('No se seleccionó ningún archivo.');
      }
    } else {
      console.error('El elemento de entrada no es válido o no tiene archivos.');
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }
}
