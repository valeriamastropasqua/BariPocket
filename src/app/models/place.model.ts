// src/app/models/place.model.ts
export type PlaceCategory =
  | 'food'
  | 'coffee'
  | 'view'
  | 'beach'
  | 'culture'
  | 'nightlife';

export interface Place {
  id: number;
  name: string;
  category: PlaceCategory;
  neighborhood: string;

  shortDescription: string;
  description: string;     // descrizione “media”
  longDescription: string; // descrizione più lunga per la pagina dettaglio

  tags?: string[];
  instagramHandle?: string;
  address?: string;
  avgPriceLevel?: 1 | 2 | 3 | 4;

  favorite?: boolean;        // usata per la stellina
}
