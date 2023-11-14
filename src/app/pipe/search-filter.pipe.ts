import { Pipe, PipeTransform } from '@angular/core';
import { Firestore, addDoc, collectionData, collection, doc,DocumentData,QuerySnapshot, deleteDoc, where, query, updateDoc, orderBy } from '@angular/fire/firestore';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    const filteredItems = items.filter((item) => {
      const cityName = item.name.toLowerCase();
      const searchInput = searchText.toLowerCase();

      return cityName.includes(searchInput);
    });

    return filteredItems;
  }
}






