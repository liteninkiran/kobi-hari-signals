import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly number = signal(10);
  readonly number$ = toObservable(this.number);
  readonly results$ = this.number$.pipe(switchMap((n) => this.api.getPrimeFactors(n)));
  readonly api = inject(ApiService);
  readonly primeFactors = toSignal(this.results$, {
    initialValue: [],
  });

  constructor() {
    this.number$.subscribe((n) => {
      console.log('Number changed to', n);
    });
  }

  increase() {
    this.number.update((n) => n + 1);
  }

  decrease() {
    this.number.update((n) => Math.max(n - 1, 3));
  }
}
