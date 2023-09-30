import { Pipe, PipeTransform } from '@angular/core';
import { Day } from '../data/data';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {
  transform(days: Day[], filterCity: string): Day[] {
    if (!days || !filterCity) {
      return days;
    }

    return days.filter(day => day.cityName.toLowerCase().includes(filterCity.toLowerCase()));
  }
}

