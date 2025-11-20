import { MOCK_PLACES } from './../data/mock-paces';
import { Injectable, signal, computed } from '@angular/core';
import { Place, PlaceCategory } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private placesSignal = signal<Place[]>(MOCK_PLACES);

  places = computed(() => this.placesSignal());

  getPlaces(category?: PlaceCategory, search?: string): Place[] {
    let result = this.placesSignal();

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (search && search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.neighborhood.toLowerCase().includes(q)
      );
    }

    return result;
  }

  getPlaceById(id: number): Place | undefined {
    return this.placesSignal().find((p) => p.id === id);
  }

  toggleFavorite(id: number): void {
    const updated = this.placesSignal().map((p) =>
      p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
    );
    this.placesSignal.set(updated);
  }

  getFavorites(): Place[] {
    return this.placesSignal().filter((p) => p.isFavorite);
  }
}
