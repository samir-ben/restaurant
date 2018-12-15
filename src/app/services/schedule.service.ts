import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) { }

  search(term): Observable<Object> {
    console.log('search');
    return this.httpClient
      .get('assets/schedules.json')
      .pipe(
        map(res => res['events'].filter(
          evt => evt.title.toLowerCase().indexOf(term) > -1 || evt.description.toLowerCase().indexOf(term) > -1 )
          ),
        tap(eventFiltered => console.log('Event filtered', eventFiltered))
      )
      ;
  }

}
