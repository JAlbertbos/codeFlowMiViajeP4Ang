import { Component, Input } from '@angular/core';
import { City } from '../data/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() day!: City | null; // Recibe el día seleccionado desde el componente padre

  // Función para ocultar los detalles
  toggleDetail() {
    this.day = null;
    location.reload();
  }
}
