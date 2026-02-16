import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private http = inject(HttpClient);
  private data = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags';

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.data);
  }

  getCountry(countryName: string): Observable<Country[]> {
    const country = `https://restcountries.com/v3.1/name/${countryName}`;

    return this.http.get<Country[]>(country);
  }
}
