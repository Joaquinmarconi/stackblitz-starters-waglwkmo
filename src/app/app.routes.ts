import { Routes } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'tareas', component: TaskListComponent },
  { path: 'acerca-de', component: AboutComponent },

  { path: '', redirectTo: '/tareas', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/tareas' } 
];