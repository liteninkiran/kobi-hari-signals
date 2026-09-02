import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

// Since zone.js isn't installed, we cannot use provideZoneChangeDetection() in app.config.ts.
// Therefore, we must rely on markForCheck() or use signals to notify Angular of changes made
// inside setInterval(), even when using the Eager strategy.
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  private readonly cdr = inject(ChangeDetectorRef);
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
      this.cdr.markForCheck();
      console.log('Counter:', this.counter);
    }, 500);
  }

  doNothing() {}

  calculateValue() {
    console.log('Calculating Value');
    return 42;
  }
}
