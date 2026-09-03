import {
  Component,
  CreateEffectOptions,
  effect,
  EffectRef,
  inject,
  Injector,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  readonly value = signal(0);
  readonly injector = inject(Injector);

  ef: EffectRef | null = null;

  constructor() {
    const int = setInterval(() => {
      this.value.update((v) => v + 1);
    }, 100);
  }

  go() {
    if (this.ef) return;
    const effectFn = () => {
      console.log(this.value());
    };
    const options: CreateEffectOptions = { injector: this.injector };
    this.ef = effect(effectFn, options);
  }

  stop() {
    if (this.ef) {
      this.ef.destroy();
      this.ef = null;
    }
  }
}
