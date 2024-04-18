import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'signals', loadComponent: () => import('./components/signals/signals.component').then(mod => mod.SignalsComponent)},
    {path: 'colors', loadComponent: () => import('./components/color-input/color-input.component').then(mod => mod.ColorInputComponent)},
    {path: 'signals-todolist', loadComponent: () => import('./components/signal-todo-list/signal-todo-list.component').then(mod => mod.SignalTodoListComponent)},
    {path: 'signals-computed', loadComponent: () => import('./components/signal-computed/signal-computed.component').then(mod => mod.SignalComputedComponent)}
];
 