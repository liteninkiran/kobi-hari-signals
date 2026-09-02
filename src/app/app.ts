import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';

// Since zone.js isn't installed, we cannot use provideZoneChangeDetection() in app.config.ts.
// Therefore, we must rely on markForCheck() or use signals to notify Angular of changes made
// inside setInterval(), even when using the Eager strategy.
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly counter$ = interval(1000);

  calculateValue() {
    console.log('Calculating Value');
    return 42;
  }
}
