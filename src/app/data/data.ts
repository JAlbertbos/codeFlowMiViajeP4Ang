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
    cityName: 'Tokio',
    accommodation: 'Asakusa view hotel',
    activities: ['Templo Senso-ji', 'Tokyo Skytree', 'Akihabara', 'Tsukiji Fish Market', 'Ginza', 'Jardín Hama-rikyu', 'Shibuya', 'Tokyo Tower'],
    description: 'Nuestro visita en Tokio nos lleva a explorar algunos de los lugares más icónicos de la ciudad. Empezaremos en el Templo Senso-ji en Asakusa, visitando el Tokyo Skytree para disfrutar de vistas panorámicas. Exploramos la tecnología y cultura otaku en Akihabara y probamos sushi fresco en el Tsukiji Fish Market. En Ginza, disfrutamos de tiendas de lujo y arte, y nos relajamos en el Jardín Hama-rikyu. La noche nos lleva a Shibuya para cruzar su famoso cruce peatonal. Como opción adicional, la Tokyo Tower ofrece vistas nocturnas impresionantes. Este tour ofrece una experiencia diversa en Tokio que no podremos olvidar.',
    videoUrl: 'assets/videos/Tokio - Compressed.mp4',
  },
  {
    dayNumber: 2,
    cityName: 'Kyoto',
    accommodation: 'Hotel Mystays Kyoto Shijo',
    activities: ['Templo Kinkaku-ji', 'Templo Ginkaku-ji', 'Barrio de Gion', 'Templo Kiyomizu-dera', 'Mercado de Nishiki', 'Templo Fushimi Inari-Taisha', 'Bosque de Bambú de Arashiyama', 'Río Hozugawa'],
    description: 'Kioto promete ser una visita mágica a través de la rica cultura y la belleza de la ciudad. Comenzaremos en el impresionante Templo Kinkaku-ji, donde el pabellón dorado resplandecerá sobre el estanque. Luego, exploraremos el Templo Ginkaku-ji y su jardín zen. Caminaremos por el Barrio de Gion, sumergiéndonos en la tradición japonesa. En el Templo Kiyomizu-dera, disfrutaremos de vistas panorámicas y una experiencia espiritual. Descubriremos delicias locales en el Mercado de Nishiki y ascenderemos la montaña hacia el majestuoso Templo Fushimi Inari-Taisha, rodeados de torii carmesíes. El Bosque de Bambú de Arashiyama nos envolverá en su belleza natural, y un tranquilo paseo en el Río Hozugawa será una experiencia única. Culminaremos el día con una cena kaiseki, deleitándonos en un festín gastronómico. Este futuro recorrido en Kioto promete ser una jornada inolvidable de cultura y maravillas naturales.',
    videoUrl: 'assets/videos/Kyoto - Compressed.mp4',
  },
  {
    dayNumber: 3,
    cityName: 'Nara',
    accommodation: 'Nara Hotel',
    activities: ['Parque de Nara', 'Templo Todai-ji', 'Santuario Kasuga-taisha', 'Museo de Nara', 'Templo Kofuku-ji', 'Paseo por el Barrio de Naramachi', 'Parque Isuien'],
    description: 'Nuestra jornada en Nara comenzará en el Parque de Nara, donde amigables ciervos sika nos recibirán. Luego, visitaremos el Templo Todai-ji y su Gran Buda. Exploraremos el Santuario Kasuga-taisha, rodeado de miles de linternas de piedra. El Museo de Nara nos brindará una visión profunda de la historia local. Caminaremos por el encantador Barrio de Naramachi y disfrutaremos de la paz en el Parque Isuien. La cena nos introducirá a la deliciosa gastronomía de Nara. En un día, experimentaremos la riqueza cultural y la belleza natural de esta ciudad histórica.',
    videoUrl: 'assets/videos/Nara - Compressed.mp4',
  },
  {
    dayNumber: 4,
    cityName: 'Osaka',
    accommodation: 'Cross Hotel Osaka',
    activities: ['Castillo de Osaka', 'Barrio de Dotonbori', 'Mercado Kuromon Ichiba', 'Templo Shitenno-ji', 'Museo de Historia de Osaka', 'Acuario de Osaka', 'Comida callejera en Shinsekai', 'Observatorio Abeno Harukas'],
    description: 'Comenzaremos explorando el Castillo de Osaka, sumergiéndonos en su historia y disfrutando de vistas panorámicas desde la torre principal. Luego, visitaremos el antiguo Templo Shitenno-ji y el Museo de Historia de Osaka nos ofrecerá una perspectiva cultural. En el Mercado Kuromon Ichiba, nos entregaremos a la deliciosa comida callejera local. Por la tarde, el Acuario de Osaka nos sumergirá en el mundo marino. No podemos perder la oportunidad de probar la comida callejera de Shinsekai antes de disfrutar de vistas desde el observatorio Abeno Harukas. Culminaremos nuestra aventura con una cena en un restaurante local para saborear la rica gastronomía de Osaka y visitar el Barrio de Dotonbori, donde la vida nocturna y los letreros luminosos nos sumergirán en su energía.',
    videoUrl: 'assets/videos/Osaka - Compressed.mp4',
  },
  {
    dayNumber: 5,
    cityName: 'Himeji',
    accommodation: 'Hotel Monterey Himeji',
    activities: ['Castillo de Himeji','Jardines Kokoen','Templo Engyo-ji','Museo de Historia de Himeji', 'Calle comercial Oteme-dori'], 
    description: 'Nuestra jornada en Himeji la comenzaremos explorando el Castillo de Himeji, una joya histórica que nos dejará asombrados con su arquitectura y vistas panorámicas. Luego, nos sumergiremos en la serenidad de los Jardines Kokoen, una joya paisajística cercana al castillo. Más tarde, haremos una excursión al tranquilo Templo Engyo-ji, ubicado en las montañas, para disfrutar de vistas panorámicas y una experiencia espiritual. El Museo de Historia de Himeji nos ofrecerá una visión más profunda de la ciudad. Después, exploraremos la calle comercial Otemae-dori para compras y degustaremos la deliciosa cocina local en un restaurante cercano. Himeji nos brindará una experiencia cultural e histórica en un día inolvidable.',
    videoUrl: 'assets/videos/Himeji - Compressed.mp4',
  },
  {
    dayNumber: 6,
    cityName: 'Hiroshima',
    accommodation: 'RIHGA Royal Hotel Hiroshima',
    activities: ['Parque Conmemorativo de la Paz de Hiroshima','Domo de la Bomba Atómica de Hiroshima','Isla de Miyajima','Museo de la Bomba Atómica de Hiroshima','Templo Shukkeien'],
    description: 'Empezaremos el día en el Parque Conmemorativo de la Paz de Hiroshima, donde el Monumento a la Paz y el Museo Memorial de la Paz nos recordarán la historia de la bomba atómica.Luego, visitaremos el Domo de la Bomba Atómica, un testimonio silencioso de los eventos pasados. También haremos una excursión a la Isla de Miyajima para explorar el Santuario Itsukushima y su famoso Torii flotante. El Museo de la Bomba Atómica de Hiroshima nos ofrecerá una visión más detallada de la historia. Después, encontraremos serenidad en el Templo Shukkeien y degustaremos la deliciosa okonomiyaki de Hiroshima en un restaurante local. Hiroshima nos brindará una experiencia enriquecedora y un mensaje de paz que nunca olvidaremos.',
    videoUrl: 'assets/videos/Hiroshima - Compressed.mp4',
  },
  
];
