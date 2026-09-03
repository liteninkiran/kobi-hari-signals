import { DestroyRef, inject } from '@angular/core';
import { interval } from 'rxjs';

export function startCounting() {
  const dr = inject(DestroyRef);
  const sub = interval(100).subscribe(console.log);
  dr.onDestroy(() => sub.unsubscribe());
}
