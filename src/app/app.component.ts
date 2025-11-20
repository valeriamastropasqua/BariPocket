import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = signal<string>('');

  onSearchChange(value: string) {
    this.search.set(value);
    // qui non fai altro, il filtraggio avviene nelle pagine
  }
}
