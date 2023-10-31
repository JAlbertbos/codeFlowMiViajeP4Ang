import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, collection, doc, deleteDoc, where, query, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { getDocs } from '@firebase/firestore';
import City from '../interfaces/city.interface';


@Injectable({
  providedIn: 'root'
})

export class CodeFlowMiViajeP2Service {
  
  private citySource = new BehaviorSubject<any | null>(null);
  cities$ = this.citySource.asObservable();


  constructor(private db: Firestore) { }

  //CRUD Ciudad
  async addCity (city: City) {
    const cityRef = collection(this.db , 'cities');
    return addDoc(cityRef, city);
  }

  async getCities(filter = '') {
    const cityRef = collection(this.db, 'cities');
    let q = query(cityRef);
    if (filter) {
      q = query(cityRef, where('city', '==', filter));
    }
    return collectionData(q) as unknown as Observable<City[]>;
  }

  async updateCity(city: City) {
    const cityRef = collection(this.db, 'cities');
    let q = query(cityRef, where('id', '==', city.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.db, 'cities', document.id);
      await updateDoc(docRef, { ...city });
    });
  }

  async deleteCity(city: City) {
    const cityRef = collection(this.db, 'cities');
    let q = query(cityRef, where('id', '==', city));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.db, 'cities', document.id);
      deleteDoc(docRef);
    });
  }
}
