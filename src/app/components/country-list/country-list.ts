import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CountryService } from '../../services/countryService';
import { RouterLink } from '@angular/router';
import { combineLatest, map, startWith } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-list',
  imports: [AsyncPipe, RouterLink, ReactiveFormsModule],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {
  private countryService = inject(CountryService);
  countries$ = this.countryService.getCountries();

  sortedCountries$ = this.countries$.pipe(
    map((countries) => [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))),
  );

  searchControl = new FormControl('', { nonNullable: true });
  regionTerm = new FormControl('', { nonNullable: true });

  filteredCountries$ = combineLatest([
    this.sortedCountries$,
    this.searchControl.valueChanges.pipe(startWith('')),
    this.regionTerm.valueChanges.pipe(startWith('')),
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
}
