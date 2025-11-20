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
      'Il lungomare classico barese, ideale per una passeggiata tranquilla.',
    longDescription:
      'Uno dei punti più iconici di Bari: lampioni bianchi, mare, panchine. Ideale per una passeggiata serale, scattare foto e rilassarsi. Spesso usato come sfondo per contenuti social e per far vedere “che sei a Bari” nelle stories.',
    tags: ['tramonto', 'foto', 'passeggiata'],
    address: 'Lungomare Nazario Sauro, Bari',
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
      'Piccolo forno di quartiere, perfetto per un pranzo veloce e low budget.',
    longDescription:
      'Piccolo panificio di quartiere dove trovare focaccia barese, panzerotti e prodotti da forno tipici. Perfetto per un pranzo veloce economico ma super soddisfacente. Spesso affollato all’uscita da scuola o università.',
    tags: ['focaccia', 'panzerotti', 'budget'],
    address: 'Via Immaginaria 12, Bari',
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
      'Locale luminoso, con tavoli grandi e tante prese elettriche.',
    longDescription:
      'Locale con tavoli spaziosi e Wi-Fi, frequentato da studenti. Ottimo per studiare, lavorare al pc o fare riunioni informali. Di solito è più tranquillo la mattina; nel pomeriggio può riempirsi.',
    tags: ['studio', 'wifi', 'studenti'],
    instagramHandle: '@caffetteria_universitaria',
    address: 'Vicino all’Ateneo, Bari',
    avgPriceLevel: 2,
    favorite: false,
  },
];
