import { Component, DestroyRef, inject, Injector, runInInjectionContext } from '@angular/core';
import { startCounting } from '../../util';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  private dr = inject(DestroyRef);
  private injector = inject(Injector);

  constructor() {
    // startCounting();
  }

  ngOnInit() {
    // startCounting(this.dr);
    runInInjectionContext(this.injector, () => {
      startCounting();
    });
  }
}
