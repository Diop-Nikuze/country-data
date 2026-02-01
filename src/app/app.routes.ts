import { Routes } from '@angular/router';
import { SnapFaceList } from './snap-face-list/snap-face-list';
import { About } from './components/about/about';

export const routes: Routes = [
  {
    path: '',
    component: SnapFaceList,
  },

  // {
  //   path: 'snapface/:id',
  //   component: SnapFaceDetail,
  // }

  {
    path: 'about',
    component: About,
  },
];
