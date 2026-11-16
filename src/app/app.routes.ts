import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/overview').then((m) => m.Overview),
    title: 'AshWave — Kinetic Financial Network',
  },
  {
    path: 'kinetic',
    loadComponent: () => import('./pages/kinetic').then((m) => m.Kinetic),
    title: 'Kinetic Financial Network — AshWave',
  },
  {
    path: 'ai-banking',
    loadComponent: () => import('./pages/ai-banking').then((m) => m.AiBanking),
    title: 'AI Banking & South Dakota Charter — AshWave',
  },
  {
    path: 'patent',
    loadComponent: () => import('./pages/patent').then((m) => m.Patent),
    title: 'PoUW & zkML Patent Specification — AshWave',
  },
  {
    path: 'ecosystem',
    loadComponent: () => import('./pages/ecosystem').then((m) => m.Ecosystem),
    title: 'SteelChain, SeaWeed & Balance Wave — AshWave',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
