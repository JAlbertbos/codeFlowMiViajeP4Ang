import { Pipe, PipeTransform } from '@angular/core';
//import { City } from '../data/data';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    // Filtrar los elementos en función de las selecciones y el texto de búsqueda
    return items.filter((item) => {
      const matchesSearchText =
        !searchText || 
        item.cityName.toLowerCase().includes(searchText.toLowerCase()) ||
        `día ${item.dayNumber} | dia ${item.dayNumber}`.toLowerCase().includes(searchText.toLowerCase());
        
      return matchesSearchText ;
    });
  }
}







