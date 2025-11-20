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
  longDescription?: string;
  description?: string;

  tags?: string[];

  instagramHandle?: string;
  googleMapsUrl?: string;
  avgPriceLevel?: 0 | 1 | 2 | 3;

  // preferiti
  favorite?: boolean;

  // campi calcolati da PlaceService
  avgRating?: number;
  reviewsCount?: number;
  womenSafeScore?: number | undefined;
  badges?: string[];
}
