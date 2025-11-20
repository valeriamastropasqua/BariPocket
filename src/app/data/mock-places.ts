// src/app/data/mock-places.ts
import { Place } from '../models/place.model';

export const MOCK_PLACES: Place[] = [
  {
    id: 1,
    name: 'Lungomare Nazario Sauro',
    category: 'view',
    neighborhood: 'Madonnella',
    shortDescription: 'Passeggiata sul mare, perfetta per tramonto e foto.',
    description:
      'Uno dei punti più iconici di Bari: lampioni bianchi, mare, panchine. Ideale per una passeggiata serale, scattare foto e rilassarsi. Spesso usato come sfondo per contenuti social.',
    longDescription:
      'Uno dei punti più iconici di Bari: lampioni bianchi, mare, panchine. Ideale per una passeggiata serale, scattare foto e rilassarsi. Spesso usato come sfondo per contenuti social.',
    tags: ['tramonto', 'foto', 'passeggiata'],
    avgPriceLevel: 1,
    favorite: false,
  },
  {
    id: 2,
    name: 'Panificio di Quartiere',
    category: 'food',
    neighborhood: 'San Pasquale',
    shortDescription: 'Focaccia barese e panzerotti da paura.',
    description:
      'Piccolo panificio di quartiere dove trovare focaccia barese, panzerotti e prodotti da forno tipici. Perfetto per un pranzo veloce economico ma super soddisfacente.',
    longDescription:
      'Piccolo panificio di quartiere dove trovare focaccia barese, panzerotti e prodotti da forno tipici. Perfetto per un pranzo veloce economico ma super soddisfacente.',
    tags: ['focaccia', 'panzerotti', 'budget'],
    avgPriceLevel: 1,
    favorite: false,
  },
  {
    id: 3,
    name: 'Caffetteria Universitaria',
    category: 'coffee',
    neighborhood: 'Zona Ateneo',
    shortDescription: 'Perfetta per studiare con pc e caffè.',
    description:
      'Locale con tavoli spaziosi e Wi-Fi, frequentato da studenti. Ottimo per studiare, lavorare al pc o fare riunioni informali.',
    longDescription:
      'Locale con tavoli spaziosi e Wi-Fi, frequentato da studenti. Ottimo per studiare, lavorare al pc o fare riunioni informali.',
    tags: ['studio', 'wifi', 'studenti'],
    instagramHandle: '@caffetteria_universitaria',
    avgPriceLevel: 2,
    favorite: false,
  },
];
