// src/app/services/review.service.ts
import { Injectable } from '@angular/core';

export interface Review {
  id: number;
  placeId: number;
  rating: number;          // 1–5
  comment: string | null;
  isWoman: boolean;
  feltSafe: boolean | null;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private _nextId = 1;
  private _reviews: Review[] = [];

  getByPlace(placeId: number): Review[] {
    return this._reviews
      .filter((r) => r.placeId === placeId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  add(input: Omit<Review, 'id'>): void {
    const review: Review = {
      ...input,
      id: this._nextId++,
    };
    this._reviews.push(review);
  }
}
