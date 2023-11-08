import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'control-flow',
    children: [
      {
        path: 'for',
        loadComponent: () =>
          import('./control-flow/ng-for/ng-for.component').then(
            (c) => c.NgForComponent
          ),
      },
      {
        path: 'if',
        loadComponent: () =>
          import('./control-flow/ng-if/ng-if.component').then(
            (c) => c.NgIfComponent
          ),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./control-flow/ng-switch/ng-switch.component').then(
            (c) => c.NgSwitchComponent
          ),
      },
      {
        path: 'defer',
        loadComponent: () =>
          import('./control-flow/defer/defer.component').then(
            (c) => c.DeferComponent
          ),
      },
    ],
  },
];
