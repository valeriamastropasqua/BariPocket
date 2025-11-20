import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaceService } from '../../services/place.service';
import { Place, PlaceCategory } from '../../models/place.model';
import { PlaceCardComponent } from '../../components/place-card/place-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, PlaceCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  categories: { key?: PlaceCategory; label: string }[] = [
    { label: 'Tutti' },
    { key: 'food', label: 'Cibo' },
    { key: 'coffee', label: 'Caffè & Studio' },
    { key: 'view', label: 'Punti panoramici' },
    { key: 'beach', label: 'Mare' },
    { key: 'culture', label: 'Cultura' },
    { key: 'nightlife', label: 'Nightlife' },
  ];

  selectedCategory = signal<PlaceCategory | undefined>(undefined);
  search = signal<string>('');

  places = computed<Place[]>(() =>
    this.placeService.getPlaces(
      this.selectedCategory(),
      this.search()
    )
  );

  constructor(private placeService: PlaceService) {}

  onCategoryChange(cat?: PlaceCategory) {
    this.selectedCategory.set(cat);
  }

  onSearchChange(value: string) {
    this.search.set(value);
  }
}
