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
  description: string;
  longDescription?: string;

  tags?: string[];

  instagramHandle?: string;
  avgPriceLevel?: number; // 1, 2, 3...

  address?: string;

  // campo usato ovunque per la stellina
  favorite?: boolean;
}
