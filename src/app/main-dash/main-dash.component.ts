import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Food } from '../models/food.interface';
import { QuickLunchService } from '../services/quick-lunch.service';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css'],
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Tacos', cols: 2, rows: 1, type: 'tacos' },
          { title: 'Chips', cols: 2, rows: 1, type: 'chips' },
          { title: 'Boissons, cafés et desserts', cols: 2, rows: 1, type: 'coffees' }
        ];
      }

      return [
        { title: 'Tacos', cols: 2, rows: 1, type: 'tacos' },
        { title: 'Chips', cols: 1, rows: 2, type: 'chips' },
        { title: 'Boissons, cafés et desserts', cols: 1, rows: 1, type: 'coffees' }
      ];
    })
  );

  tacos: Food[];
  chips: Food[];
  coffees: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private quickLunchService: QuickLunchService ) {}

  ngOnInit() {
    this.tacos = this.quickLunchService.getTacos();
    this.chips = this.quickLunchService.getChips();
    this.coffees = this.quickLunchService.getCoffees();
  }

}
