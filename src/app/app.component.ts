import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeFlow-miViaje';

  selectedFilter: string = 'city'; 
  filterValue: string = '';

  
  applyFilter() {
 
  }
}
