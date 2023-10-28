import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { City } from '../data/data';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CodeFlowMiViajeP2Service {

  constructor(private firestore: Firestore) { }

  addCity (city: City) {
    const cityRef = collection (this.firestore , 'cities')
    return addDoc(cityRef, city)
  }
}
