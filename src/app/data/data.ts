export interface Day {
  dayNumber: number;
  cityName: string;
  accommodation: string;
  activities: string[];
  description: string;
  videoUrl: string;
}

export const tripDays: Day[] = [
  {
    dayNumber: 1,
    cityName: 'Ciudad 1',
    accommodation: 'Hotel 1',
    activities: ['Museo 1', 'Tour 1'],
    description: 'Descripción del día 1',
    videoUrl: 'assets/videos/day1.mp4',
  },
  {
    dayNumber: 2,
    cityName: 'Ciudad 2',
    accommodation: 'Hotel 2',
    activities: ['Museo 2', 'Tour 2'],
    description: 'Descripción del día 2',
    videoUrl: 'assets/videos/day2.mp4',
  },
  // Agregar más
];
