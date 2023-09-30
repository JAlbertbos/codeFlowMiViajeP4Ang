
import { Pipe, PipeTransform } from '@angular/core';
import { Day } from '../data/data';

@Pipe({
  name: 'dayFilter'
})
export class DayFilterPipe implements PipeTransform {
  transform(days: Day[], filterDay: number): Day[] {
    if (!days || !filterDay) {
      return days;
    }

    return days.filter(day => day.dayNumber === filterDay);
  }
}

