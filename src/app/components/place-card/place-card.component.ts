import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Place } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent {
  @Input() place!: Place;

  constructor(private placeService: PlaceService) {}

  toggleFavorite(event?: MouseEvent) {
    // per evitare che il click sulla stellina segua il link
    event?.preventDefault();
    this.placeService.toggleFavorite(this.place.id);
  }
}
