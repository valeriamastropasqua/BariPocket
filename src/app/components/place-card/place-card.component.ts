import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Place } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-card.component.html',
})
export class PlaceCardComponent {
  @Input() place!: Place;

  constructor(private placeService: PlaceService) {}

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.placeService.toggleFavorite(this.place.id);
  }
}
