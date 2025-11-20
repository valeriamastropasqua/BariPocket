import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../../services/place.service';
import { PlaceCardComponent } from '../../components/place-card/place-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, PlaceCardComponent],
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent {
  constructor(private placeService: PlaceService) {}

  get favorites() {
    return this.placeService.getFavorites();
  }
}
