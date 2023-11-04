import { Component, OnInit } from '@angular/core';
import City from '../interfaces/city.interface';
import { CodeFlowMiViajeP2Service } from '../services/code-flow-mi-viaje-p2.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})


export class CityListComponent implements OnInit {

  formulario: FormGroup;

  cities: City[] = [];
  newCity: City = {
    name: '',
    day: 0,
    activities: '',
    video: null,
  };

  constructor(private codeFlowMiViajeP2Service: CodeFlowMiViajeP2Service, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: [''],
      day: [''],
      activities: [''],
      video: [null], // Inicializa video como null o como corresponda
    });
  }
  async ngOnInit() {
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe((cities) => {
      this.cities = cities;
    });  }

  async refreshCityList() {
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe((cities) => {
      this.cities = cities;
    });
  }

  onClickDelete(city: City) {
    // Lógica para eliminar la ciudad
    //llamar a this.refreshCityList() para actualizar la lista
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // Obtén el archivo seleccionado
    this.newCity.video = file; // Asigna el archivo a newCity.video
  }
  onSubmit() {
    // Asegúrate de que newCity esté correctamente inicializado con los valores del formulario
    const newCity: City = {
      name: this.formulario.get('name')?.value || '', // Usar '' como valor predeterminado si es nulo
      day: this.formulario.get('day')?.value || 0, // Usar 0 como valor predeterminado si es nulo
      activities: this.formulario.get('activities')?.value || '', // Usar '' como valor predeterminado si es nulo
      video: this.formulario.get('video')?.value || null, // Usar '' como valor predeterminado si es nulo
    };
  
    // Luego, puedes agregar la nueva ciudad
    this.codeFlowMiViajeP2Service.addCity(newCity).then(() => {
      this.refreshCityList();
      this.formulario.reset(); // Esto restablecerá el formulario después de agregar la ciudad
    });
  }
  
}
