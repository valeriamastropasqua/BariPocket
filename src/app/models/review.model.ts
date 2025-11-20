// src/app/models/review.model.ts
export interface Review {
  id: number;
  placeId: number;

  rating: number;          // 1–5
  comment: string;

  createdAt: string;       // ISO string
  authorName?: string;     // opzionale, puoi usarlo anche giusto per mostrare un nome finto

  // 👇 per l’indicatore “sicuro per le donne”
  isWoman?: boolean;
  feltSafe?: boolean;
}
