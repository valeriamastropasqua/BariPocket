import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place.model';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css'],
})
export class PlaceDetailComponent {
  place?: Place;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    const found = this.placeService.getPlaceById(id);

    if (!found) {
      // se l'id è sbagliato torno alla home
      this.router.navigateByUrl('/');
      return;
    }

    this.place = found;
  }

  toggleFavorite() {
    if (!this.place) return;
    this.placeService.toggleFavorite(this.place.id);
  }

  get priceLabel(): string | null {
    if (!this.place?.avgPriceLevel) return null;
    return '€'.repeat(this.place.avgPriceLevel);
  }
}
