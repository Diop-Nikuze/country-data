import { Component, effect, inject, input } from '@angular/core';
import { CountryService } from '../../services/countryService';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-details',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './country-details.html',
  styleUrl: './country-details.scss',
})
export class CountryDetails {
  private countryService = inject(CountryService);

  countryName = input.required<string>();
  country$!: Observable<Country[]>;

  constructor() {
    effect(() => (this.country$ = this.countryService.getCountry(this.countryName())));
  }

  getLanguages(country: Country): string {
    if (!country.languages) return 'N/A';
    return Object.values(country.languages).join(', ');
  }

  getCurrencies(country: Country): string {
    if (!country.currencies) return 'N/A';

    return Object.values(country.currencies)
      .map((currency: any) => currency.name)
      .join(', ');
  }

  getNativeName(country: Country): string {
    if (!country.name.nativeName) return country.name.common;

    const values = Object.values(country.name.nativeName);

    return values[0].common;
  }
}
