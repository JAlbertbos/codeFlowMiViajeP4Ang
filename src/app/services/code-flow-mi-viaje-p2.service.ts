import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import City from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CodeFlowMiViajeP2Service {

  constructor(private firestore: Firestore) { }

  //CRUD Ciudad
  addCity (city: City) {
    const cityRef = collection (this.firestore , 'cityRef')
    return addDoc(cityRef, city)
  }

  getCities(): Observable<City[]> {
    const cityRef = collection(this.firestore, 'cities');
    return collectionData(cityRef, { idField: 'id' }) as Observable<City[]>;
  }

  deleteCity(city: City) {
    const cityDocRef = doc(this.firestore, `cities/${city.id}`);
    return deleteDoc(cityDocRef);
  }

}
