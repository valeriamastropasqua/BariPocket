import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place.model';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-detail.component.html',
})
export class PlaceDetailComponent {
  place?: Place;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.place = this.placeService.getPlaceById(id);
  }

  get priceLabel(): string | null {
    if (!this.place?.avgPriceLevel) return null;
    return '€'.repeat(this.place.avgPriceLevel);
  }
}
