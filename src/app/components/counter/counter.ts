import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  constructor() {
    interval(1000).subscribe(console.log);
  }
}
