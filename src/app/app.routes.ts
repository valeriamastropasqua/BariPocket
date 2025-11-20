import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceDetailComponent } from './pages/place-detail/place-detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' },
];
