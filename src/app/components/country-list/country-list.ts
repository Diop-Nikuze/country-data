import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CountryService } from '../../services/countryService';
import { RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-country-list',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {
  private countryService = inject(CountryService);
  countries$ = this.countryService.getCountries();

  sortedCountries$ = this.countries$.pipe(
    map((countries) => [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))),
  );

  searchTerm = signal('');
  regionTerm = signal('');

  filteredCountries$ = combineLatest([
    this.sortedCountries$,
    toObservable(this.searchTerm),
    toObservable(this.regionTerm),
  ]).pipe(
    map(([countries, term, region]) => {
      return countries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(term.toLowerCase());

        const matchesRegion =
          region === '' || country.region.toLowerCase() === region.toLowerCase();

        return matchesSearch && matchesRegion;
      });
    }),
  );

  onSearchTermChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  onRegionChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.regionTerm.set(select.value);
  }
}
