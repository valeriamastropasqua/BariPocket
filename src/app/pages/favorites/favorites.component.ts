import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../../services/place.service';
import { PlaceCardComponent } from '../../components/place-card/place-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, PlaceCardComponent, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  constructor(private placeService: PlaceService) {}

  get favorites() {
    return this.placeService.getFavorites();
  }
}
