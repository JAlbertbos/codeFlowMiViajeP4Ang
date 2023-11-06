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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  
}
