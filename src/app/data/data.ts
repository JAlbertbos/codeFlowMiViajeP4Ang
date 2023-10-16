export interface City {
  dayNumber: number;
  cityName: string;
  accommodation: string;
  activities: string[];
  description: string;
  videoUrl: string;
}

export const tripDays: City[] = [
  {
    dayNumber: 1,
    cityName: 'Ciudad 1',
    accommodation: 'Asakusa View Hote',
    activities: ['Templo Senso-ji',
      'Tokyo Skytree',
      'Akihabara',
      'Tsukiji Fish Market',
      'Ginza',
      'Jardín Hama-rikyu',
      'Shibuya',
      'Tokyo Tower'],
    description: 'Nuestro visita en Tokio nos lleva a explorar algunos de los lugares más icónicos de la ciudad. Empezaremos en el Templo Senso-ji en Asakusa, visitando el Tokyo Skytree para disfrutar de vistas panorámicas. Exploramos la tecnología y cultura otaku en Akihabara y probamos sushi fresco en el Tsukiji Fish Market. En Ginza, disfrutamos de tiendas de lujo y arte, y nos relajamos en el Jardín Hama-rikyu. La noche nos lleva a Shibuya para cruzar su famoso cruce peatonal. Como opción adicional, la Tokyo Tower ofrece vistas nocturnas impresionantes. Este tour ofrece una experiencia diversa en Tokio que no podremos olvidar.',
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
