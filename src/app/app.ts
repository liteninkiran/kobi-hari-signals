import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  showCounter = false;

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
