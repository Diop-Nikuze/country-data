import { Routes } from '@angular/router';
import { CountryDetails } from './components/country-details/country-details';
import { CountryList } from './components/country-list/country-list';

export const routes: Routes = [
  {
    path: '',
    component: CountryList,
  },
  {
    path: 'country/:countryName',
    component: CountryDetails,
  },
];
