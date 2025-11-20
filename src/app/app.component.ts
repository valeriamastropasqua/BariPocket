import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="app-logo">bari-local</div>
        <div class="app-subtitle">Consigli veri da chi Bari la vive ogni giorno</div>
      </header>

      <main class="app-main">
        <router-outlet></router-outlet>
      </main>

      <footer class="app-footer">
        <span>Made with ❤️ in Bari</span>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
