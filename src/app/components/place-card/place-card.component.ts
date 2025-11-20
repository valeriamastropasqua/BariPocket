// src/app/components/place-card/place-card.component.ts
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

  get priceLabel(): string {
    switch (this.place.avgPriceLevel) {
      case 1:
        return '€ · economico';
      case 2:
        return '€€ · medio';
      case 3:
        return '€€€ · costoso';
      default:
        return '';
    }
  }

  onToggleFavorite(event: MouseEvent): void {
    // evita che il click sulla stellina faccia navigare la <a>
    event.preventDefault();
    this.placeService.toggleFavorite(this.place.id);
  }

  badgeLabel(badge: string, place: Place): string {
{
  switch (badge) {
    case 'hiddenGem':
      return 'Gemma nascosta';
    case 'budgetFriendly':
      return 'Budget friendly';
    case 'studyFriendly':
      return 'Perfetto per studiare';
    case 'instagrammable':
      return 'Instagrammabile';
    case 'womenSafe':
      const perc = place.womenSafeScore
        ? Math.round(place.womenSafeScore * 100)
        : undefined;
      return perc
        ? `Perceputo sicuro da ${perc}% delle donne`
        : 'Segnalato sicuro per le donne';
    default:
      return String(badge);
  }
}

}
}
