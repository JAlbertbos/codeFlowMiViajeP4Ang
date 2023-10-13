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
    cityName: 'TOKIO',
    accommodation: 'Asakusa view hotel',
    activities: ['Templo Senso-ji', 'Tokyo Skytree', 'Akihabara', 'Tsukiji Fish Market', 'Ginza', 'Jardín Hama-rikyu', 'Shibuya', 'Tokyo Tower'],
    description: 'Nuestro visita en Tokio nos lleva a explorar algunos de los lugares más icónicos de la ciudad. Empezaremos en el Templo Senso-ji en Asakusa, visitando el Tokyo Skytree para disfrutar de vistas panorámicas. Exploramos la tecnología y cultura otaku en Akihabara y probamos sushi fresco en el Tsukiji Fish Market. En Ginza, disfrutamos de tiendas de lujo y arte, y nos relajamos en el Jardín Hama-rikyu. La noche nos lleva a Shibuya para cruzar su famoso cruce peatonal. Como opción adicional, la Tokyo Tower ofrece vistas nocturnas impresionantes. Este tour ofrece una experiencia diversa en Tokio que no podremos olvidar.',
    videoUrl: 'assets/videos/Tokio - Compressed.mp4',
  },
  {
    dayNumber: 2,
    cityName: 'KYOTO',
    accommodation: 'Hotel Mystays Kyoto Shijo',
    activities: ['Templo Kinkaku-ji', 'Templo Ginkaku-ji', 'Barrio de Gion', 'Templo Kiyomizu-dera', 'Mercado de Nishiki', 'Templo Fushimi Inari-Taisha', 'Bosque de Bambú de Arashiyama', 'Río Hozugawa'],
    description: 'Kioto promete ser una visita mágica a través de la rica cultura y la belleza de la ciudad. Comenzaremos en el impresionante Templo Kinkaku-ji, donde el pabellón dorado resplandecerá sobre el estanque. Luego, exploraremos el Templo Ginkaku-ji y su jardín zen. Caminaremos por el Barrio de Gion, sumergiéndonos en la tradición japonesa. En el Templo Kiyomizu-dera, disfrutaremos de vistas panorámicas y una experiencia espiritual. Descubriremos delicias locales en el Mercado de Nishiki y ascenderemos la montaña hacia el majestuoso Templo Fushimi Inari-Taisha, rodeados de torii carmesíes. El Bosque de Bambú de Arashiyama nos envolverá en su belleza natural, y un tranquilo paseo en el Río Hozugawa será una experiencia única. Culminaremos el día con una cena kaiseki, deleitándonos en un festín gastronómico. Este futuro recorrido en Kioto promete ser una jornada inolvidable de cultura y maravillas naturales.',
    videoUrl: 'assets/videos/Kyoto - Compressed.mp4',
  },
  {
    dayNumber: 3,
    cityName: 'NARA',
    accommodation: 'Nara Hotel',
    activities: ['Parque de Nara', 'Templo Todai-ji', 'Santuario Kasuga-taisha', 'Museo de Nara', 'Templo Kofuku-ji', 'Paseo por el Barrio de Naramachi', 'Parque Isuien'],
    description: 'Nuestra jornada en Nara comenzará en el Parque de Nara, donde amigables ciervos sika nos recibirán. Luego, visitaremos el Templo Todai-ji y su Gran Buda. Exploraremos el Santuario Kasuga-taisha, rodeado de miles de linternas de piedra. El Museo de Nara nos brindará una visión profunda de la historia local. Caminaremos por el encantador Barrio de Naramachi y disfrutaremos de la paz en el Parque Isuien. La cena nos introducirá a la deliciosa gastronomía de Nara. En un día, experimentaremos la riqueza cultural y la belleza natural de esta ciudad histórica.',
    videoUrl: 'assets/videos/Nara - Compressed.mp4',
  },
  {
    dayNumber: 4,
    cityName: 'OSAKA',
    accommodation: 'Hotel Mystays Kyoto Shijo',
    activities: ['Templo Kinkaku-ji', 'Templo Ginkaku-ji', 'Barrio de Gion', 'Templo Kiyomizu-dera', 'Mercado de Nishiki', 'Templo Fushimi Inari-Taisha', 'Bosque de Bambú de Arashiyama', 'Río Hozugawa'],
    description: '',
    videoUrl: 'assets/videos/Osaka - Compressed.mp4',
  },
  {
    dayNumber: 5,
    cityName: 'HIMEJI',
    accommodation: 'Hotel Mystays Kyoto Shijo',
    activities: ['Templo Kinkaku-ji', 'Templo Ginkaku-ji', 'Barrio de Gion', 'Templo Kiyomizu-dera', 'Mercado de Nishiki', 'Templo Fushimi Inari-Taisha', 'Bosque de Bambú de Arashiyama', 'Río Hozugawa'], /*FALTA Cambiar*/
    description: '',
    videoUrl: 'assets/videos/Himeji - Compressed.mp4',
  },
  {
    dayNumber: 6,
    cityName: 'HIROSHIMA',
    accommodation: 'Hotel Mystays Kyoto Shijo',
    activities: ['Templo Kinkaku-ji', 'Templo Ginkaku-ji', 'Barrio de Gion', 'Templo Kiyomizu-dera', 'Mercado de Nishiki', 'Templo Fushimi Inari-Taisha', 'Bosque de Bambú de Arashiyama', 'Río Hozugawa'], /*FALTA Cambiar*/
    description: '',
    videoUrl: 'assets/videos/Hiroshima - Compressed.mp4',
  },
  
];
