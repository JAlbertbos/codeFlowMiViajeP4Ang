import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, collection, doc, deleteDoc, where, query, updateDoc, orderBy } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, uploadString } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { getDocs } from '@firebase/firestore';
import City from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})

export class CodeFlowMiViajeP2Service {

  constructor(private db: Firestore, private storage: Storage) { }

  // CRUD Ciudad
  async addCity(city: City) {
    const cityRef = collection(this.db, 'cities');
    return addDoc(cityRef, city); 
  }

  async addCityWithVideo(city: City, videoFile: File) {
    // Agregar la ciudad sin el video
    const addedCity = await this.addCity(city);

    // Subir el video a Firebase Storage
    if (videoFile) {
      const videoRef = ref(this.storage, `videos/${addedCity.id}`);
      await uploadBytes(videoRef, videoFile);
    }

    return addedCity;
  }
  
  async getCities(filter = '') {
    const cityRef = collection(this.db, 'cities');
    let q = query(cityRef);
    if (filter) {
      q = query(cityRef, where('city', '==', filter));
    }
    return collectionData(q) as unknown as Observable<City[]>;
  }

  async updateCity(city: City, dia: Number, ciudad: String) {
    
    try{
      const cityRef = collection(this.db, 'cities');
      let q = query(cityRef, where('name', '==', ciudad), where('day', '==', dia));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (document) => {
        const docRef = doc(this.db, 'cities', document.id);
        await updateDoc(docRef, { ...city });
      });
    }catch (error) {
      console.error("Error updating city:", error);
    }
  }

  async deleteCity(city: City) {
    const cityRef = collection(this.db, 'cities');
    let q = query(cityRef, where('name', '==', city.name), where('day', '==', city.day));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.db, 'cities', document.id);
      deleteDoc(docRef);
    });
  }
}
