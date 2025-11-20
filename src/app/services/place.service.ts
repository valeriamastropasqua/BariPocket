// src/app/services/place.service.ts
import { Injectable, signal } from '@angular/core';
import { Place, PlaceCategory } from '../models/place.model';
import { MOCK_PLACES } from '../data/mock-places';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  // stato centrale della lista
  private placesSignal = signal<Place[]>(MOCK_PLACES);

  /**
   * Restituisce i posti filtrati per categoria e query di ricerca.
   */
  getPlaces(category?: PlaceCategory, query: string = ''): Place[] {
    const q = query.trim().toLowerCase();

    return this.placesSignal().filter((p) => {
      const matchCategory = category ? p.category === category : true;

      const haystack = [
        p.name,
        p.neighborhood,
        p.description,
        ...(p.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();

      const matchQuery = q ? haystack.includes(q) : true;

      return matchCategory && matchQuery;
    });
  }

  /**
   * Inverte lo stato "favorite" di un posto.
   */
  toggleFavorite(id: number): void {
    this.placesSignal.update((list) =>
      list.map((p) =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  }

  /**
   * Tutti i posti marcati come preferiti.
   */
  getFavorites(): Place[] {
    return this.placesSignal().filter((p) => p.favorite);
  }

  /**
   * Restituisce un singolo posto per id (per la pagina dettaglio).
   */
  getPlaceById(id: number): Place | undefined {
    return this.placesSignal().find((p) => p.id === id);
  }
}
