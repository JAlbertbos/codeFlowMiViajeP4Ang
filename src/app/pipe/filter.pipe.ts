import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../data/data';

@Pipe({
  name: 'Filter'
})
export class FilterPipe implements PipeTransform {
  transform(city: City[], filter: string): City[] {
    if (!city || !filter) {
      return city;
    }

    return city.filter(city => city.cityName.toLowerCase().includes(filter.toLowerCase()));
  }
}

