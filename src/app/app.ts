import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, firstValueFrom, map } from 'rxjs';

type Options = Record<string, string>;

const initialOptions: Options = {
  r: 'Red',
  g: 'Green',
  b: 'Blue',
};

const secondaryOptions: Options = {
  m: 'Magenta',
  y: 'Yellow',
  c: 'Cyan',
};

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly a$ = new BehaviorSubject<number>(1);
  readonly b$ = new BehaviorSubject<number>(2);
  readonly sum$ = combineLatest([this.a$, this.b$]).pipe(map(([a, b]) => a + b));

  async incA() {
    // Only increment A if A + B is less than 10
    const sum = await firstValueFrom(this.sum$);
    if (sum < 10) {
      this.a$.next(this.a$.value + 1);
    }
  }

  readonly options$ = new BehaviorSubject<Options>(initialOptions);
  readonly selectedKey$ = new BehaviorSubject<string>('b');
  readonly selectedValue$ = combineLatest([this.options$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key]),
  );

  constructor() {
    this.selectedValue$.subscribe(console.log);
  }

  switchOptions() {
    this.options$.next(secondaryOptions);
    this.selectedKey$.next('c');
  }
}
