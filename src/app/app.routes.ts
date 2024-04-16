import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'signals', loadComponent: () => import('./components/signals/signals.component').then(mod => mod.SignalsComponent)},
    {path: 'colors', loadComponent: () => import('./components/color-input/color-input.component').then(mod => mod.ColorInputComponent)},
];
 