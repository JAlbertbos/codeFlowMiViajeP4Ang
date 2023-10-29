import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import City from '../interfaces/city.interface';


@Injectable({
  providedIn: 'root'
})

export class CodeFlowMiViajeP2Service {
  
  constructor(private db: Firestore) { }

  //CRUD Ciudad
  addCity (city: City) {
    const cityRef = collection(this.db , 'cities');
    return addDoc(cityRef, city);
  }

   getCities(): Observable<City[]> {
    const cityRef = collection(this.db , 'cities');
    return collectionData(cityRef, { idField: 'id' }) as Observable<City[]>;
  }

  deleteCity(city: City) {
    const cityDocRef = doc(this.db, `cities/${city.id}`);
    return deleteDoc(cityDocRef);
  }

}
