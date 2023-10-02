import { Component, Input } from '@angular/core';
import { City } from '../data/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() day!: City; // Recibe el día seleccionado desde el componente padre

  // Variable para controlar la visibilidad de los detalles
  isDetailVisible: boolean = false;

  // Función para mostrar u ocultar los detalles
  toggleDetail() {
    this.isDetailVisible = !this.isDetailVisible;
  }

}
