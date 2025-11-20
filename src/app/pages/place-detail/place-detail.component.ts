// src/app/pages/place-detail/place-detail.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Place } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';
import { Review, ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css'],
})
export class PlaceDetailComponent {
  place!: Place;
  reviews: Review[] = [];

  reviewForm = {
    rating: 5,
    comment: '',
    isWoman: false,
    feltSafe: false,
  };

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.placeService.getById(id);
    if (!found) return;

    this.place = found;
    this.loadReviews();
  }

  private loadReviews(): void {
    this.reviews = this.reviewService.getByPlace(this.place.id);
  }

  /** Label “sicuro per le donne” */
  get womenSafeLabel(): string | null {
    const score = this.place?.womenSafeScore;
    const count = this.place?.reviewsCount ?? 0;
    if (score == null || count === 0) return null;

    const perc = Math.round(score * 100);
    if (perc >= 80) {
      return `Percepito sicuro dalle donne (${perc}% delle recensioni femminili positive)`;
    }
    if (perc >= 60) {
      return `Feedback misto: ${perc}% di recensioni femminili positive`;
    }
    return `Alcune donne non si sono sentite del tutto al sicuro (${perc}% positive)`;
  }

  /** Invio recensione */
  submitReview(): void {
    if (!this.place) return;

    this.reviewService.add({
      placeId: this.place.id,
      rating: this.reviewForm.rating,
      comment: this.reviewForm.comment.trim() || null,
      isWoman: this.reviewForm.isWoman,
      feltSafe: this.reviewForm.isWoman ? this.reviewForm.feltSafe : null,
      createdAt: new Date(),
    });

    // reset form
    this.reviewForm = {
      rating: 5,
      comment: '',
      isWoman: false,
      feltSafe: false,
    };

    this.loadReviews();
    this.place = this.placeService.getById(this.place.id)!;
  }

  /** Toggle preferito dal dettaglio */
  onToggleFavorite(): void {
    this.placeService.toggleFavorite(this.place.id);
    this.place = this.placeService.getById(this.place.id)!;
  }
}
