import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { DetailComponent } from './detail/detail.component';
import { PlayerComponent } from './player/player.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { FirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { DropdownFilterPipe } from './pipe/dropdown-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DetailComponent,
    PlayerComponent,
    SearchFilterPipe,
<<<<<<< HEAD
=======
    DropdownFilterPipe,
>>>>>>> aac1620631315f60b191777e9ece7194d3837445
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    provideStorage(() => getStorage()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }




