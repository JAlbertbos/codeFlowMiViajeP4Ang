import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

    selectedVideo: File | null = null;
  
    onVideoSelected(event: any) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        this.selectedVideo = fileInput.files[0];
      }
    }
  
    onSubmit() {
      // Envía el formulario con el video seleccionado
      if (this.selectedVideo) {
        // Aquí puedes cargar el video a tu servidor o realizar otras acciones
        // Puedes usar bibliotecas como ng2-file-upload para cargar archivos
      }
    }
  }
  

