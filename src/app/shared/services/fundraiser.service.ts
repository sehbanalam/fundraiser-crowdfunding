import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fundraiser } from '../models/fundraiser.model';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FundraiserService {
  private http = inject(HttpClient);
  private dataUrl = '/data/fundraisers.json';

  // Cache the fundraisers observable
  private fundraisers$ = this.http.get<Fundraiser[]>(this.dataUrl).pipe(
    shareReplay(1),
    catchError(() => of([])), // Return empty array on error
  );

  getFundraisers(): Observable<Fundraiser[]> {
    return this.fundraisers$;
  }

  getFundraiserById(id: string): Observable<Fundraiser | undefined> {
    return this.fundraisers$.pipe(map((fundraisers) => fundraisers.find((f) => f.id === id)));
  }

  getFeatured(): Observable<Fundraiser[]> {
    return this.fundraisers$.pipe(
      map((fundraisers) => fundraisers.slice(0, 3)), // Return top 3 as featured
    );
  }
}
