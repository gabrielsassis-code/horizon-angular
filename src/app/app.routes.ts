import { Routes } from '@angular/router';
import { Aulas } from './pages/aulas/aulas';
import { Contatos } from './pages/contatos/contatos';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'aulas' },
  { path: 'aulas', component: Aulas, title: 'Aulas | Academia Horizonte' },
  { path: 'sobre', component: Sobre, title: 'Sobre | Academia Horizonte' },
  { path: 'contatos', component: Contatos, title: 'Contato | Academia Horizonte' },
  { path: '**', redirectTo: 'aulas' },
];
