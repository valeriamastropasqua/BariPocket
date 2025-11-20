export type PlaceCategory =
  | 'food'
  | 'coffee'
  | 'beach'
  | 'view'
  | 'culture'
  | 'nightlife'
  | 'other';

export interface Place {
  id: number;
  name: string;
  category: PlaceCategory;
  neighborhood: string; // es. "Madonnella", "Poggiofranco"
  shortDescription: string;
  longDescription: string;
  instagramHandle?: string;
  address?: string;
  lat?: number;
  lng?: number;
  avgPriceLevel?: 1 | 2 | 3 | 4; // € - €€€€
  tags: string[];                // es. ["tramonto", "foto", "aperitivo"]
  isFavorite?: boolean;
}
