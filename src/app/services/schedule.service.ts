import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { EveningEvent } from '../models/evening-events.interface';
import { Schedule } from '../models/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) { }

  search(term: string): Observable<EveningEvent[]> {
    console.log('search');
    return this.httpClient
      .get<Schedule>('assets/schedules.json')
      .pipe(
        map(res => res.events.filter(
          evt => evt.title.toLowerCase().indexOf(term) > -1 || evt.description.toLowerCase().indexOf(term) > -1 )
          ),
        tap(eventFiltered => console.log('Event filtered', eventFiltered))
      )
      ;
  }

}
