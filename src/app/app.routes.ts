import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals.component').then((c) => c.SignalsComponent),
  },
  {
    path: 'route-binding/:id',
    data: {
      configData: 'I am fixed',
    },
    loadComponent: () =>
      import('./route-data-binding/route-data-binding.component').then(
        (c) => c.RouteDataBindingComponent
      ),
  },
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
