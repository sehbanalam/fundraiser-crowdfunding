import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./features/fundraiser-list/fundraiser-list').then((m) => m.FundraiserList),
  },
  {
    path: 'fundraiser/:id',
    loadComponent: () =>
      import('./features/fundraiser-detail/fundraiser-detail').then((m) => m.FundraiserDetail),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./features/create-fundraiser/create-fundraiser').then((m) => m.CreateFundraiser),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
