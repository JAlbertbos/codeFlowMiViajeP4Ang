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
  @Input() selectedCity: City | null = null; 
  showErrorMessage: boolean = false;    // Variable para manejar el estado de la aplicación
  dropdownOpen: boolean = false;    // Variable para manejar el estado de la aplicación
  showForm: boolean = false;    // Variable para manejar la aparcion del formulario
  formulario: FormGroup;
  cities: City[] = [];    // Array para almacenar las ciudades
  newCity: City = {   // Objeto para almacenar los datos del nuevo elemento de la ciudad
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
    // Inicialización del formulario 
    this.formulario = this.fb.group({
      name: [''],
      day: [''],
      description: [''],
      accomodation: [''],
      activities: [],
      video: [null],
    });
  }

  // Función para mostrar los detalles del día seleccionado
  showDetails(day: City) {
      // Si el día seleccionado ya está mostrándose, ocúltalo
    if (this.selectedCity === day) {
      this.selectedCity = null;
    } else {
      // Si no, muestra los detalles del día seleccionado
      this.selectedCity = day; 
    }
  }

  async eliminarDia(city: City){
    console.log(city);
    await this.codeFlowMiViajeP2Service.deleteCity(city);
  }


  showModal = false;
  openModal(city: City) {
    this.selectedCity = city;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }


  // Método que se ejecuta al inicio del componente
  async ngOnInit() {
    // Obtener las ciudades desde el servicio y suscribirse a los cambios
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe((cities) => {
      this.cities = cities;
    });
  }

  // Método para actualizar la lista de ciudades
  async refreshCityList() {
    // Obtener las ciudades desde el servicio y actualizar la variable local
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe((cities) => {
      this.cities = cities;
    });
  }

  // Método que se ejecuta cuando se selecciona un archivo de video
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.newCity.video = file;
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    // Obtener los controles del formulario para realizar validaciones
    const nameControl = this.formulario.get('name');
    const dayControl = this.formulario.get('day');
    const descriptionControl = this.formulario.get('description');
    const accomodationControl = this.formulario.get('accomodation');
    const activitiesControl = this.formulario.get('activities');

    // Verificar si los campos obligatorios están vacíos
    if (
      !nameControl?.value ||
      !dayControl?.value ||
      !descriptionControl?.value ||
      !accomodationControl?.value ||
      !activitiesControl?.value
    ) {
      // Mostrar el mensaje de error si falta información obligatoria
      this.showErrorMessage = true;
      return; 
    }

    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      // El formulario es válido, proceder a enviar los datos
      const activitiesValue = this.formulario.get('activities')?.value;
      const activities = activitiesValue ? activitiesValue.split(',') : [];

      // Crear un nuevo objeto City con los datos del formulario
      const newCity: City = {
        name: this.formulario.get('name')?.value || '',
        day: this.formulario.get('day')?.value || 0,
        description: this.formulario.get('description')?.value || '',
        accomodation: this.formulario.get('accomodation')?.value || '',
        activities: activities,
        video: this.formulario.get('video')?.value || null,
      };

      // Llamar al servicio para agregar la ciudad
      this.codeFlowMiViajeP2Service.addCity(newCity).then((response) => {
        if (response) {
          // Obtener indice de la ultima ciudad de la lista
          const index = this.cities.length -1;

          // Insertar la nueva ciudad debajo de la ultima ciudad insertada
          this.cities.splice(index + 1, 0, newCity);

          // Actualizar la lista de ciudades y resetear el formulario
          this.refreshCityList();
          this.formulario.reset();
          this.showErrorMessage = false;

          // Cerrar el formulario automáticamente después de enviarlo
          this.toggleForm();
        } else {
          // Realizar alguna acción de validación adicional si es necesario
          console.error('Error al guardar la ciudad.');
        }
      });
    } else {
      // El formulario no es válido, mostramos un mensaje de error
      console.error('El formulario contiene errores o campos obligatorios que no están llenos.');
    }
  }
  
  onSubmitEditar() {
    const nameControl = this.formulario.get('name');
    const dayControl = this.formulario.get('day');
    const descriptionControl = this.formulario.get('description');
    const accomodationControl = this.formulario.get('accomodation');
    const activitiesControl = this.formulario.get('activities');

    console.log("Nombre: " + this.formulario.get('name')?.value);
  }

  // Método que se ejecuta cuando se selecciona un archivo de video en el formulario
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

  // Método para alternar el estado de la variable dropdownOpen
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

 // Método para cerrar el menú desplegable
  closeDropdown() {
    this.dropdownOpen = false;
  }


  toggleForm() {
    this.showForm = !this.showForm;
  }
}