import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css'],
})
export class MainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'La carte', cols: 2, rows: 1 },
          { title: 'Tacos', cols: 2, rows: 1 },
          { title: 'Chips', cols: 2, rows: 1 },
          { title: 'Boissons, cafés et desserts', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'La carte', cols: 2, rows: 1 },
        { title: 'Tacos', cols: 1, rows: 1 },
        { title: 'Chips', cols: 1, rows: 2 },
        { title: 'Boissons, cafés et desserts', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
