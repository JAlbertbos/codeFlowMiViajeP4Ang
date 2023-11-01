import { Component, OnInit } from '@angular/core';
import City from '../interfaces/city.interface';
import { CodeFlowMiViajeP2Service } from '../services/code-flow-mi-viaje-p2.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[];

  constructor(
    private codeFlowMiViajeP2Service: CodeFlowMiViajeP2Service
  ) {
    this.cities = [{
      name: 'Prueba de sitio',
      activities: 'Esto es una prueba'
    }];
  }

  async ngOnInit(): Promise<void> {
    (await this.codeFlowMiViajeP2Service.getCities()).subscribe(cities => {
      this.cities = cities;
    })
  }

  async onClickDelete(city: City) {
    const response = await this.codeFlowMiViajeP2Service.deleteCity(city);
    console.log(response);
  }

}
