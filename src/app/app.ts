import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { mySignal } from './my-signal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // readonly firstSignal = signal(42);
  // readonly secondSignal = signal('Signals');

  readonly firstSignal = mySignal(42);
  readonly secondSignal = mySignal('Signals');

  constructor() {
    console.log('The first signal value is:', this.firstSignal());
    console.log('The second signal value is:', this.secondSignal());
  }
}
