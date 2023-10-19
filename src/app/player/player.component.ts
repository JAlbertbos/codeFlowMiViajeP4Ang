import { Component, Input } from '@angular/core';
import { City } from '../data/data';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() dayVideo: City | null;
  
  constructor() {
    this.dayVideo = null; // Inicializa la propiedad en el constructor
  }
}
