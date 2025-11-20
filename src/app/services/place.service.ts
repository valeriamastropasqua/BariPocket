// src/app/services/place.service.ts
import { Injectable, computed, signal } from '@angular/core';
import { MOCK_PLACES } from '../data/mock-places';
import { Place, PlaceCategory } from '../models/place.model';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  private placesSignal = signal<Place[]>(MOCK_PLACES);

  // Se ti serve in futuro come stream globale
  places = computed(() => this.placesSignal());

  getPlaces(
    category?: PlaceCategory,
    search: string = ''
  ): Place[] {
    const term = search.trim().toLowerCase();

    return this.placesSignal().filter((p) => {
      if (category && p.category !== category) return false;

      if (!term) return true;

      const inText =
        p.name.toLowerCase().includes(term) ||
        p.neighborhood.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.tags?.some((t) => t.toLowerCase().includes(term));

      return inText;
    });
  }

  // --- Preferiti (già sfrutti la proprietà .favorite sugli oggetti) ---

  toggleFavorite(id: number): void {
    this.placesSignal.update((list) =>
      list.map((p) =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  }

  getFavorites(): Place[] {
    return this.placesSignal().filter((p) => p.favorite);
  }

  // --- NUOVO: dettaglio posto ---

  getPlaceById(id: number): Place | undefined {
    return this.placesSignal().find((p) => p.id === id);
  }
}
