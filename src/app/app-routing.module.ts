import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysComponent } from './days/days.component';
import { DetailComponent } from './detail/detail.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: '/mi-viaje', pathMatch: 'full' }, 
  { path: 'mi-viaje', component: DaysComponent }, 
  { path: 'mi-viaje', component: DetailComponent },
  { path: 'mi-viaje', component: PlayerComponent },
  // agregar más rutas 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
