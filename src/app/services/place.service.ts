// src/app/services/place.service.ts
import { Injectable, signal } from '@angular/core';
import { Place } from '../models/place.model';
import { MOCK_PLACES } from '../data/mock-places';
import { ReviewService } from './review.service';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  private _places = signal<Place[]>(MOCK_PLACES);
  places = this._places.asReadonly();

  constructor(private reviewService: ReviewService) {}

  /** Lista filtrata + campi calcolati */
  getPlaces(category?: string, search?: string): Place[] {
    let base = this._places();

    if (category) {
      base = base.filter((p) => p.category === category);
    }

    if (search) {
      const q = search.toLowerCase();
      base = base.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.neighborhood.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return base.map((p) => this.withAggregates(p));
  }

  getById(id: number): Place | undefined {
    const found = this._places().find((p) => p.id === id);
    return found ? this.withAggregates(found) : undefined;
  }

  toggleFavorite(id: number): void {
    this._places.update((list) =>
      list.map((p) =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  }

  getFavorites(): Place[] {
    return this.getPlaces().filter((p) => p.favorite);
  }

  /** Aggiunge avgRating, reviewsCount, womenSafeScore, badges */
  private withAggregates(p: Place): Place {
    const reviews = this.reviewService.getByPlace(p.id);
    if (reviews.length === 0) {
      return {
        ...p,
        reviewsCount: 0,
        avgRating: undefined,
        womenSafeScore: undefined,
      };
    }

    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const women = reviews.filter((r) => r.isWoman);
    const safeWomen = women.filter((r) => r.feltSafe);

    const womenSafeScore =
      women.length === 0 ? undefined : safeWomen.length / women.length;

    const badges = new Set(p.badges ?? []);

    if (avgRating >= 4.7 && reviews.length >= 5) {
      badges.add('hiddenGem');
    }
    if (womenSafeScore !== undefined && womenSafeScore >= 0.8 && women.length >= 5) {
      badges.add('womenSafe');
    }
    if (p.avgPriceLevel !== undefined && p.avgPriceLevel <= 1) {
      badges.add('budgetFriendly');
    }

    return {
      ...p,
      avgRating: Number(avgRating.toFixed(1)),
      reviewsCount: reviews.length,
      womenSafeScore,
      badges: Array.from(badges),
    };
  }
}
